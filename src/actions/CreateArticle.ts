"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const CreateArticlesSchema = z.object({
  title: z.string().min(3).max(100),
  category: z.string().min(2).max(50),
  content: z.string().min(10),
});

type ArticleFromState = {
  errors: {
    title?: string[];
    content?: string[];
    category?: string[];
    formError?: string[];
    featuredImage?: string[];
  };
};

export const CreateArticles = async (
  prevState: ArticleFromState,
  formData: FormData
): Promise<ArticleFromState> => {
  const result = CreateArticlesSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    category: formData.get("category"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { userId } = await auth();
  if (!userId) {
    return {
      errors: {
        formError: ["Login first to create articles"],
      },
    };
  }

  const existingUser  = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  if (!existingUser ) {
    return {
      errors: {
        formError: [
          "User not found, Please register before creating an articles",
        ],
      },
    };
  }
  // creating Articles

  const imageFile = formData.get("featuredImage") as File | null;
  if (!imageFile || imageFile?.name === "undefined") {
    return {
      errors: {
        featuredImage: ["Please Provide an Image"],
      },
    };
  }
  // Converting image to buffer file

  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const UploadResponse: UploadApiResponse | undefined = await new Promise(
    (resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    }
  );

  const imageUrl = UploadResponse?.secure_url;
  if (!imageUrl) {
    return {
      errors: {
        featuredImage: ["Faild to Upload image,Please try again "],
      },
    };
  }
  try {
    await prisma.articles.create({
      data: {
        title: result.data.title,
        category: result.data.category,
        content: result.data.content,
        featuredImage: imageUrl,
        authorId: existingUser.id,
      },
    });
  } catch (error: unknown) {
    console.error("Database error:", error);
    if (error instanceof Error) {
      return {
        errors: {
          formError: [error.message],
        },
      };
    } else {
      return {
        errors: {
          formError: ["Internal server error"],
        },
      };
    }
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

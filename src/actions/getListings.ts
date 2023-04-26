import prisma from "../libs/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}

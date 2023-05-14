import getListingById from "../../../actions/getListingById";

interface IParams {
    listingId?: string
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params)
  return (
    <div>
      <h1>{listing.title}</h1>
    </div>
  );
};

export default ListingPage;

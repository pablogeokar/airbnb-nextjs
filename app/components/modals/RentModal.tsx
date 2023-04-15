"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

enum STEPS{
   CATEGORY = 0,
   LOCATION =1, 
   INFO = 2,
   IMAGES = 3,
   DESCRIPTION = 4,
   PRICE = 5
}

const RentModal: React.FC = () => {
  const rentModal = useRentModal();

  return (
    <Modal
      title="Airbnb your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      actionLabel="Submit"
      onSubmit={rentModal.onClose}
    />
  );
};

export default RentModal;

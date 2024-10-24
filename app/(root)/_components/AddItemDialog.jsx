"use client"
import addItem from '@/api/addItem';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function AddItemDialog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      itemName: '',
      itemPrice: 0,
      itemPhoto: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      // Ensure that `itemPhoto` is defined and take the first file from the array
      const itemPhoto = data.itemPhoto ? data.itemPhoto[0] : null;
  
      if (!itemPhoto) {
        throw new Error("No item photo provided");
      }
  
      // Call addItem with the form data and the item photo
      const response = await addItem({ item_name: data.itemName, price: data.itemPrice }, itemPhoto);
  
      console.log('Item added successfully:', response);
      toast.success("Item added"); // Handle the success response
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error adding item:', error.message); // Handle the error response
    }
  };
  

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-400 text-white" variant="outline">Add an Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add an Item</DialogTitle>
        </DialogHeader>

        {/* Controlled Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Item Name */}
          <div>
            <label className="block text-sm my-3 font-medium text-gray-700">Item Name</label>
            <Input type="text" {...register('itemName')} />
          </div>

          {/* Item Price */}
          <div>
            <label className="block text-sm my-3 font-medium text-gray-700">Item Price</label>
            <Input type="number" {...register('itemPrice')} />
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block text-sm my-3 font-medium text-gray-700">Upload Photo</label>
            <Input type="file" accept="images/*" {...register('itemPhoto')} />
          </div>

          {/* Submit Button */}
          <DialogFooter>
            <Button type="submit" className="bg-purple-500 text-white">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddItemDialog;

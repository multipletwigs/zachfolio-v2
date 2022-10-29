import { Dialog, Popover } from '@headlessui/react';
import { useState } from 'react';

export const Link = ({
  linkName,
  href
}: {
  linkName: string;
  href: string;
}) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
    <button onClick={() => setIsOpen(true)}>{linkName}</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4 text-slate-500">
        <Dialog.Panel className="bg-slate-300 w-[70%] md:w-[50%] px-5 py-5">
          <Dialog.Title className="">Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

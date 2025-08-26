"use client";

import { useState } from 'react';
import BaseModal from './BaseModal';
import { FiFile, FiTrash2, FiEdit } from 'react-icons/fi';

// --- Create File Modal ---
export const CreateFileModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: (name: string) => void; }) => {
  const [fileName, setFileName] = useState('');

  const handleConfirm = () => {
    // Basic validation
    if (fileName.trim()) {
      onConfirm(fileName);
      setFileName('');
      onClose();
    } else {
      alert("File name cannot be empty.");
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Create New File" icon={<FiFile className="text-blue-500" />}>
      <div>
        <label htmlFor="fileName" className="text-sm font-medium text-gray-700">File Name</label>
        <input
          id="fileName"
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="e.g., component.js"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          autoFocus
        />
        <p className="mt-2 text-xs text-gray-500">Location: /src/</p>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">Cancel</button>
        <button onClick={handleConfirm} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Create File</button>
      </div>
    </BaseModal>
  );
};

// --- Delete Confirmation Modal ---
export const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, items }: { isOpen: boolean; onClose: () => void; onConfirm: () => void; items: string[]; }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Delete Confirmation" icon={<FiTrash2 className="text-red-500" />}>
      <div>
        <p className="text-sm text-gray-600">
          Are you sure you want to delete the following {items.length > 1 ? 'items' : 'item'}?
        </p>
        <ul className="mt-2 list-disc list-inside bg-gray-50 p-3 rounded-md">
            {items.map(item => <li key={item} className="text-sm font-mono text-gray-800">{item}</li>)}
        </ul>
        <p className="mt-4 font-semibold text-red-600">This action cannot be undone.</p>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">Delete</button>
      </div>
    </BaseModal>
  );
};

// --- Rename Modal ---
export const RenameModal = ({ isOpen, onClose, onConfirm, currentName }: { isOpen: boolean; onClose: () => void; onConfirm: (newName: string) => void; currentName: string; }) => {
    const [newName, setNewName] = useState(currentName);

    const handleConfirm = () => {
        if (newName.trim() && newName !== currentName) {
            onConfirm(newName);
            onClose();
        } else if (newName === currentName) {
            onClose();
        } else {
            alert("Name cannot be empty.");
        }
    };

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title="Rename" icon={<FiEdit className="text-gray-500" />}>
            <div>
                <label htmlFor="newName" className="text-sm font-medium text-gray-700">New Name</label>
                <input
                    id="newName"
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    autoFocus
                    onFocus={(e) => e.target.select()}
                />
            </div>
            <div className="mt-6 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">Cancel</button>
                <button onClick={handleConfirm} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Rename</button>
            </div>
        </BaseModal>
    );
};
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ConfirmationCard = ({ message, onConfirm, onCancel }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        {message || "This action cannot be undone. Please confirm your choice."}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-4 pt-4">
                    <Button variant="outline" onClick={onCancel}>Cancel</Button>
                    <Button variant="destructive" onClick={onConfirm}>Confirm</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmationCard;

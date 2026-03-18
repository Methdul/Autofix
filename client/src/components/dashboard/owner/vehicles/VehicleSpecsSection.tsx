import React, { useState } from 'react';
import { Car, Calendar, Hash, CheckCircle2, Tractor as Chassis, Save, X } from 'lucide-react';
import type { Vehicle } from '../../../../api/vehicle.api';

interface VehicleSpecsSectionProps {
  vehicle: Vehicle;
  onDelete: () => Promise<void>;
  onUpdate: (data: Partial<Vehicle>) => Promise<any>;
}

const VehicleSpecsSection: React.FC<VehicleSpecsSectionProps> = ({ vehicle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    licensePlate: vehicle.licensePlate,
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to remove this ${vehicle.make} ${vehicle.model}? This action cannot be undone.`
    );

    if (confirmed) {
      await onDelete();
    }
  };

  return (
    <div>
      {/* UI will go here later */}
    </div>
  );
};

export default VehicleSpecsSection;
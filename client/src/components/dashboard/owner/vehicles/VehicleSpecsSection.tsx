import React, { useState } from 'react';
import { Car, Calendar, Hash, CheckCircle2, Tractor as Chassis, Save, X } from 'lucide-react';
import type { Vehicle } from '../../../../api/vehicle.api';

interface VehicleSpecsSectionProps {
  vehicle: Vehicle;
  onDelete: () => Promise<void>;
  onUpdate: (data: Partial<Vehicle>) => Promise<any>;
}
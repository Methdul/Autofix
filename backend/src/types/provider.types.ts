// provider.types.ts is the provider profile and service domain types in it

// service categories for provider classification

export enum ServiceCategory {
 GARAGE = 'GARAGE',
 CARRIER = 'CARRIER',
 DETAILER = 'DETAILER',    
}


// business details of service provider, provider profile interface

export interface ProviderProfile {
    id: string;
    userId: string;
    bussinessName: string;
    category: ServiceCategory;
    phone: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
}

// for specific service item in the provider's catalog
export interface ProviderService {
    id: string;
    providerId: string;
    name: string;
    price: number;
    description?: string;   // "?" used for optional property so description is optional
    createdAt: Date;
    updatedAt: Date;
}

// DTO (Data Transfer Object) for creating a new service item
export interface CreateServiceItemDTO {
    name: string;
    price: number;
    description?: string;
}

// DTO for updating provider profile
export interface UpdateProviderProfileDTO {
    bussinessName?: string;
    category?: ServiceCategory;
    phone?: string;
    address?: string;
}

// response object for provider profile
export interface ProviderDetailsResponse {
    profile: ProviderProfile;
    services: ProviderService[];
}

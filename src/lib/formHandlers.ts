import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  newsletter: boolean;
  scheduleCall: boolean;
  callDateTime?: {
    date: Date | undefined;
    time: string;
  };
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience?: string;
  education: string;
  portfolio?: string;
  coverLetter: string;
  availability: string;
  resumeFileName?: string;
}

export interface FreeServiceFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  description: string;
  eligibilityChecks: {
    verifiedBusiness: boolean;
    portfolioDisplay: boolean;
    socialFollow: boolean;
    testimonial: boolean;
  };
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'contact_submissions'), {
      ...data,
      timestamp: serverTimestamp(),
      type: 'contact'
    });
    console.log('Contact form submitted with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    throw error;
  }
};

export const submitCareerForm = async (data: CareerFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'career_applications'), {
      ...data,
      timestamp: serverTimestamp(),
      type: 'career'
    });
    console.log('Career application submitted with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting career application: ', error);
    throw error;
  }
};

export const submitFreeServiceForm = async (data: FreeServiceFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'free_service_applications'), {
      ...data,
      timestamp: serverTimestamp(),
      type: 'free_service'
    });
    console.log('Free service application submitted with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting free service application: ', error);
    throw error;
  }
};

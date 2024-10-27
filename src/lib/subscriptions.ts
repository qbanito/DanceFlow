import {
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

export interface Subscription {
  id: string;
  userId: string;
  status: 'active' | 'canceled' | 'past_due' | 'incomplete';
  planId: string;
  currentPeriodEnd: number;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  createdAt: number;
  updatedAt: number;
}

export async function createSubscription(userId: string, planId: string) {
  const subscriptionRef = doc(collection(db, 'subscriptions'));
  
  const subscription: Subscription = {
    id: subscriptionRef.id,
    userId,
    status: 'incomplete',
    planId,
    currentPeriodEnd: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  await setDoc(subscriptionRef, subscription);
  return subscription;
}

export async function getSubscription(userId: string): Promise<Subscription | null> {
  const subscriptionsRef = collection(db, 'subscriptions');
  const subscriptionDoc = await getDoc(doc(subscriptionsRef, userId));
  
  if (!subscriptionDoc.exists()) {
    return null;
  }
  
  return subscriptionDoc.data() as Subscription;
}

export function subscribeToUserSubscription(userId: string, callback: (subscription: Subscription | null) => void) {
  const subscriptionRef = doc(collection(db, 'subscriptions'), userId);
  
  return onSnapshot(subscriptionRef, (doc) => {
    if (!doc.exists()) {
      callback(null);
      return;
    }
    
    callback(doc.data() as Subscription);
  });
}
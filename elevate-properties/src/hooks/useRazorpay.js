import { useCallback, useState } from 'react';

/**
 * Frontend-only Razorpay integration hook.
 *
 * Without a backend, we cannot create a Razorpay *Order* (which requires the
 * server-side secret key).  Instead we open the Razorpay Checkout modal in
 * "payment link" / key-only mode.  The payment is captured automatically on
 * Razorpay's end when auto-capture is enabled (default for test keys).
 *
 * This is perfectly fine for:
 *   – Demo / assignment / hackathon projects
 *   – Test-mode transactions
 *
 * In production you'd create an order on the backend first and pass the
 * `order_id` into the options below.
 */

const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

export default function useRazorpay() {
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle | processing | success | failed

  const initiatePayment = useCallback(
    ({
      amount,          // Amount in ₹ (will be converted to paise)
      currency = 'INR',
      name = 'Elevate Estates',
      description = 'Property Booking',
      image = '/favicon.svg',
      prefill = {},
      notes = {},
      onSuccess,
      onFailure,
      onDismiss,
    }) => {
      if (!RAZORPAY_KEY) {
        console.error('Razorpay key not configured. Set VITE_RAZORPAY_KEY_ID in your .env file.');
        alert('Payment gateway not configured. Please contact support.');
        return;
      }

      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay SDK not loaded.');
        alert('Payment gateway failed to load. Please refresh and try again.');
        return;
      }

      setPaymentStatus('processing');

      const options = {
        key: RAZORPAY_KEY,
        amount: Math.round(amount * 100), // Razorpay expects paise
        currency,
        name,
        description,
        image,
        prefill: {
          name: prefill.name || '',
          email: prefill.email || '',
          contact: prefill.contact || '',
        },
        notes,
        theme: {
          color: '#C5A059', // matches --color-accent
        },
        handler: function (response) {
          // response.razorpay_payment_id is available here
          setPaymentStatus('success');
          onSuccess?.(response);
        },
        modal: {
          ondismiss: function () {
            setPaymentStatus('idle');
            onDismiss?.();
          },
          escape: true,
          animation: true,
        },
      };

      try {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          setPaymentStatus('failed');
          onFailure?.(response.error);
        });
        rzp.open();
      } catch (err) {
        console.error('Razorpay error:', err);
        setPaymentStatus('failed');
        onFailure?.(err);
      }
    },
    []
  );

  return { initiatePayment, paymentStatus, setPaymentStatus };
}

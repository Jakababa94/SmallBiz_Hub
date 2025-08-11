import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    paymentIntentId: {
        type: String,
        required: true,
    }, // PaymentIntent ID from Stripe
    amount: {
        type: Number,
        required: true,
    },
    method: {
        type: String,
        enum: ['credit_card', 'paypal', 'bank_transfer'],
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;

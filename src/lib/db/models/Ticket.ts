import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Early Bird', 'Standard', 'VIP'],
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  orderId: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

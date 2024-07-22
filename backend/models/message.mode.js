import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(  
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String, 
      reuired: true,
    },
    // createdAt, updatedAt => message.createdAt : 19:00
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;

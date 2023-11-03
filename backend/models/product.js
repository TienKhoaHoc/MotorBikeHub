import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    bikeid: {
        type : String,
        require: [true, 'Please enter product bikeid']
    },
    brand: {
        type : String,
        require: [true, 'Please enter product brand'],
        enum: {
            values: [
                "Honda",
                "Suzuki",
                "Yamaha",
                "SYM",
                "Other"
            ],
            message: "Please select correct brand"
        }
    },
    name: {
        type : String,
        require: [true, 'Please enter product name']
    },
    price: {
        type : Number,
        require: [true, 'Please enter product price']
    },
    color: {
        type : String,
        require: [true, 'Please enter product color']
    },
    decrip: {
        type : String,
        require: [true, 'Please enter product decription']
    },
    images: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            },
        },
    ],
    stock: {
        type : Number,
        require: [true, 'Please enter product stock']
    },
    ratings: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            rating: {
                type: Number,
                require: true,
            },
            comment: {
                type: String,
                require: true,
            },
            createAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
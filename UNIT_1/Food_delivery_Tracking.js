// food delivery tracking system
// for this Image

    // Function 1: Place Order (1s delay)
function placeOrder(item, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order placed for ${item}`);
            resolve({ orderId: 101 });
        }, delay);
    });
}

// Function 2: Assign Rider (2s delay)
function assignRider(orderId, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Order confirmed");
            console.log("🧑‍🍳 Assigning rider...");
            resolve({ riderId: 501 });
        }, delay);
    });
}

// Function 3: Pickup Order (2s delay)
function pickupOrder(riderId, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("🚴 Rider assigned");
            console.log("📦 Order picked up");
            resolve("On the way");
        }, delay);
    });
}

// Function 4: Deliver Order (3s delay)
function deliverOrder(orderId, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("🚚 Delivering order...");
            resolve("Delivered");
        }, delay);
    });
}


// Main async function
async function trackOrder() {
    try {
        const order = await placeOrder("Pizza", 1000);
        console.log("👉 Order confirmed");

        const rider = await assignRider(order.orderId, 2000);
        console.log("👉 Rider assigned");

        await pickupOrder(rider.riderId, 2000);
        console.log("👉 On the way");

        await deliverOrder(order.orderId, 3000);
        console.log("👉 Delivered");

    } catch (error) {
        console.log("❌ Error:", error);
    } finally {
        console.log("🔒 Tracking closed");
    }
}

// Run the tracking system
trackOrder();
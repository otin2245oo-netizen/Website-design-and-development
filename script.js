let cart = [];
let totalCount = 0;

// เพิ่มสินค้าลงตะกร้า[cite: 19]
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalCount++;
    
    const countDisplay = document.getElementById('cart-count');
    if (countDisplay) {
        countDisplay.innerText = totalCount;
    }
    
    alert("เพิ่ม " + productName + " ลงในตะกร้าเรียบร้อยแล้ว!");[cite: 19]
}

// เปลี่ยนสี Navbar เมื่อเลื่อนหน้าจอ[cite: 19]
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#004d00"; 
    } else {
        nav.style.backgroundColor = "#006400";
    }
};

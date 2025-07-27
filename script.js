const menuData = {
    restaurant: "KADAPA VS RESTAURANT",
    contacts: {
        "Vamsi Reddy": "8328263413",
        "Pavan Reddy": "9391632195"
    },
    menu: {
        veg: {
            "Soups": {
                image: "images/veg-soup.jpg",
                items: [
                    "Tomato Soup - ₹60",
                    "Veg Manchow Soup - ₹70",
                    "Veg Hot Corn Soup - ₹80",
                    "Veg Sweet Corn Soup - ₹80",
                    "Veg Lemon Coriander Soup - ₹90"
                ]
            },
            "Starters": {
                image: "images/veg-starters.avif",
                items: [
                    "Veg Manchuria - ₹70",
                    "Gobi Manchuria - ₹80",
                    "Chilli Gobi - ₹90",
                    "Gobi 65 - ₹100",
                    "Mushroom Manchuria - ₹120",
                    "Paneer Manchuria - ₹120",
                    "Mushroom 65 - ₹130",
                    "Babycorn Manchuria - ₹130",
                    "Paneer 65 - ₹130",
                    "Babycorn 65 - ₹140",
                    "Chilli Paneer - ₹140",
                    "Chilli Mushroom - ₹140",
                    "Paneer Majestic - ₹150",
                    "Chilli Babycorn - ₹150",
                    "Kaju 65 - ₹180",
                    "Kaju Pakodi - ₹190",
                    "Kaju Roast - ₹200"

                ]
            },
            "Biryani": {
                image: "images/veg-biryani.jpg",
                items: [
                    "Plain Biryani Rice - ₹80",
                    "Veg Biryani - ₹130",
                    "Mushroom Biryani - ₹160",
                    "Kaju Biryani - ₹180",
                    "Paneer Biryani - ₹180"
                ]
            },
            "Fried Rice & Noodles": {
                image: "images/fried-rice.jpeg",
                items: [
                    "Veg Noodles - ₹80",
                    "Schezwan Noodles - ₹110",
                    "Jeera Fried Rice - ₹70",
                    "Veg Fried Rice - ₹80",
                    "Mushroom Fried Rice - ₹90",
                    "Babycorn Fried Rice - ₹100",
                    "Paneer Fried Rice - ₹100",
                    "Kaju Fried Rice - ₹100",
                    "Schezwan Veg - ₹110",
                    "Schezwan Mushroom - ₹110",
                    "Schezwan Paneer - ₹120",
                    "Schezwan Babycorn - ₹120",
                    "Schezwan Kaju - ₹120",
                    "Mixed Veg Fried Rice - ₹150"

                ]
            },
            "Curries": {
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
                items: [
                    "Mixed Veg - ₹120",
                    "Mushroom - ₹150",
                    "Babycorn Curry - ₹150",
                    "Kadai Mushroom - ₹160",
                    "Kadai Babycorn - ₹160",
                    "Kaju Curry - ₹170",
                    "Paneer Butter Masala - ₹180",
                    "Kadai Paneer - ₹190"
                ]
            },
            "Roti & Naan": {
                image: "images/naan.jpeg",
                items: [
                    "Roti-->(1 Pc) - ₹10",
                    "Butter Roti-->(1 Pc) - ₹15",
                    "Kothmeer Roti-->(1 Pc) - ₹20",
                    "Plain Naan-->(2 Pcs) - ₹30",
                    "Butter Naan-->(2 Pcs) - ₹40",
                    "Kothmeer Naan-->(2 Pcs) - ₹50",
                    "Garlic Naan-->(2 Pcs) - ₹60",
                    "Plain Kulcha-->(2 Pcs) - ₹60",
                    "Butter Kulcha-->(2 Pcs) - ₹70"
                ]
            },
            "Chilled Drinks": {
                image: "images/juices.jpeg",
                items: [
                    "Butter Milk - ₹30",
                    "Sweet Lassi - ₹50",
                ]
            }
        },
        "non-veg": {
            "Soups": {
                image: "images/chicken soup.jpg",
                items: [
                    "Chicken Sweet Corn Soup - ₹120",
                    "Chicken Hot Corn Soup - ₹130",
                    "Chicken Manchow Soup - ₹140",
                    "Chicken Lemon Coriander Soup - ₹150",
                    "Chicken Dragon Soup - ₹160",
                    "Mutton Soup - ₹180",
                    "Mutton Hot Corn Soup - ₹190"
                ]
            },
            "Starters - Chicken": {
                image: "images/chicken starters.jpg",
                items: [
                    "Chicken Pakoda - ₹110",
                        "Chicken Manchuria - ₹130",
                        "Chicken 65 - ₹140",
                        "Chilli Chicken - ₹150",
                        "Chicken 555 - ₹150",
                        "Chicken Majestic - ₹160",
                        "Chicken Drumstick (Dry) - ₹170",
                        "Pepper Chicken - ₹170",
                        "Dragon Chicken - ₹170",
                        "Chicken Lollipop (Juicy) - ₹180",
                        "Lemon Chicken - ₹180",
                        "Chicken Kabab Pakodi - ₹200",
                        "Kaju Nut Chicken - ₹230",
                        "Crispy Chicken - ₹250"

                ]
            },
            "Starters - Egg": {
                image: "images/egg starters.jpg",
                items: [
                    "Egg Burji - ₹70",
                    "Egg 65 - ₹80",
                    "Egg Manchuria - ₹80",
                    "Chilli Egg - ₹90",
                ]
            },
            "Starters - Mutton": {
                image: "images/mutton starters.jpeg",
                items: [
                    "Mutton Manchuria - ₹200",
                    "Mutton 65 - ₹230",
                    "Chilli Mutton - ₹250"
                ]
            },
            "Starters - Fish": {
                image: "images/fish starters.jpg",
                items: [
                    "Fish Roast Bones - ₹80",
                    "Fish Roast Boneless - ₹200",
                    "Fish 65 - ₹210",
                    "Chilli Fish - ₹220",
                    "Apollo Fish - ₹230",
                ]
            },
            "Starters - Prawns": {
                image: "images/prawns starters.jpg",
                items: [
                    "Prawns Manchuria - ₹160",
                    "Prawns 65 - ₹170",
                    "Chilli Prawns - ₹180",
                    "Loose Prawns - ₹190"
                ]
            },
            "Biryani - Chicken": {
                image: "images/chicken biryani.jpg",
                items: [
                   "Plain Biryani Rice - ₹80",
                    "Hyderabad Dum Biryani-->(Half) - ₹120",
                    "Hyderabad Dum Biryani-->(Full) - ₹160",
                    "Chicken Fry Piece Biryani - ₹160",
                    "Chicken Lollipop Biryani-->(Half) - ₹160",
                    "Gongura Chicken Biryani - ₹170",
                    "Chicken Joint Biryani - ₹180",
                    "Hyderabadi Special Biryani - ₹180",
                    "Mughlai Chicken Biryani - ₹200",
                    "Chicken 65 Biryani - ₹210",
                    "Chicken Lollipop Biryani-->(Full) - ₹300",
                    "Family Pack-->(Sprite 250ml Free) - ₹450",
                    "Chicken Dilkush Biryani - ₹700",
                    "Jumbo Pack-->(2 Butter Naan, Chicken Curry, 500ml Sprite, 3 Eggs, Chicken 65) - ₹1200"

                ]
            },
            "Biryani - (Mutton Only on Wednesday & Sunday for Special One’s)": {
                image: "images/mutton biryani.jpg",
                items: [
                    "",
                    "Mutton Dum Biryani - ₹320",
                    "Mutton Fry Biryani - ₹330",
                    "Mutton Mughlai Biryani - ₹340",
                    "Gongura Mutton Biryani - ₹350",
                    "Mutton SP Biryani - ₹360",
                    "Family Pack-->(Sprite 250ml Free) - ₹650",
                    "Jumbo Pack-->(2 Butter Naan, Chicken Curry, 500ml Sprite, 3 Eggs, Chicken 65) - ₹1500"
                ]
            },
            "Biryani - Egg & Fish & Prawns": {
                image: "images/egg biryani.jpg",
                items: [
                    "Egg Biryani - ₹130",
                    "Fish Biryani - ₹200",
                    "Prawns Biryani - ₹210",
                    "Mix Non-Veg Biryani - ₹600",
                ]
            },
            "Fried Rice & Noodles": {
                image: "images/chicken rice.jpg",
                items: [
                    "Chicken Noodles - ₹100",
                    "Chicken Schezwan Noodles - ₹120",
                    "Egg Fried Rice (Single) - ₹80",
                    "Dragon Egg Fried Rice - ₹90",
                    "Chicken Fried Rice - ₹100",
                    "Egg Schezwan - ₹100",
                    "Fish Fried Rice - ₹110",
                    "Chicken Schezwan - ₹120",
                    "Prawns Fried Rice - ₹130",
                    "Chicken Box Fried Rice - ₹140",
                    "Chicken SP Fried Rice - ₹150"

                ]
            },
            "Curries - Chicken": {
                image: "images/chicken curry.jpg",
                items: [
                    "Chicken Curry-->(Bones) - ₹160",
                    "Chicken Kheema Masala - ₹160",
                    "Coriander Chicken - ₹170",
                    "Gongura Chicken - ₹180",
                    "Kadai Chicken - ₹180",
                    "Hyderabad Chicken - ₹200",
                    "Chicken Muhrani - ₹200",
                    "Chicken Curry-->(Boneless) - ₹220",
                    "Afghani Chicken - ₹220",
                    "Mughlai Chicken - ₹230",
                    "Punjabi Chicken - ₹250",
                    "Butter Chicken - ₹250"

                ]
            },
            "Curries - Mutton": {
                image: "images/mutton curry.jpg",
                items: [
                    "Mutton Curry - ₹280",
                    "Kadai Mutton - ₹290",
                    "Mutton Masala - ₹300"
                ]
            },
            "Curries - Fish & Prawns": {
                image: "images/fish curry.jpeg",
                items: [
                    "Fish Curry - ₹200",
                    "Kadai Fish - ₹220",
                    "Prawns Curry - ₹220",
                    "Kadai Prawns - ₹230"
                ]
            },
            "Tandoori & Kababs": {
                image: "images/tandoori chicken.jpg",
                items: [
                    "Chicken Haryali Tikka Half-->(4pcs) - ₹170",
                    "Chicken Haryali Tikka Full-->(8pcs) - ₹330",
                    "Chicken Tikka Half-->(4 pcs) - ₹160",
                    "Chicken Tikka Full-->(8 pcs) - ₹300",
                    "Malai Kabab Half-->(4 pcs) - ₹160",
                    "Malai Kabab Full-->(8 pcs) - ₹320",
                    "Reshmi Kabab Half-->(4 pcs) - ₹170",
                    "Reshmi Kabab Full-->(8pcs) - ₹340",
                    "Tandoori Chicken Half-->(4 pcs) - ₹270",
                    "Tandoori Chicken Full-->(8 pcs) - ₹510",
                    "Tangdi Kabab Half-->(2 pcs) - ₹150",
                    "Tangdi Kabab Full-->(4 pcs) - ₹300",
                    "Fish Tikka - ₹220",
                    "Prawns Tikka - ₹320"
                ]
            }
        }
    }
};

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const menuSections = document.querySelectorAll('.menu-section');
    
    // Initialize menus
    renderMenu('veg');
    renderMenu('non-veg');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active menu section
            menuSections.forEach(section => section.classList.remove('active'));
            document.getElementById(`${category}-menu`).classList.add('active');
        });
    });
});

function renderMenu(category) {
    const menuContainer = document.getElementById(`${category}-menu`);
    const categoryData = menuData.menu[category];
    
    let html = '';
    
    Object.keys(categoryData).forEach(subcategory => {
        const subcategoryData = categoryData[subcategory];
        
        html += `
            <div class="subcategory-card">
                <div class="subcategory-header">
                    <img src="${subcategoryData.image}" alt="${subcategory}" class="subcategory-image" loading="lazy">
                    <h2 class="subcategory-title">${subcategory}</h2>
                </div>
                <div class="items-grid">
                    ${subcategoryData.items.map(item => {
                        const [name, price] = item.split(' - ');
                        return `
                            <div class="menu-item">
                                <span class="item-name">${name}</span>
                                <span class="item-price">${price}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });
    
    menuContainer.innerHTML = html;
}
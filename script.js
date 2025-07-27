const menuData = {
    restaurant: "KADAPA VS RESTAURANT",
    contacts: {
        "Vamsi Reddy": "8328263413",
        "Pavan Reddy": "9391632195"
    },
    menu: {
        veg: {
            "Soups": {
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop",
                items: [
                    "Veg Sweet Corn Soup - ₹30",
                    "Tomato Soup - ₹60",
                    "Veg Manchow Soup - ₹70",
                    "Veg Hot Corn Soup - ₹80",
                    "Veg Lemon Coriander Soup - ₹90"
                ]
            },
            "Starters": {
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
                items: [
                    "Veg Manchuria - ₹70",
                    "Gobi Manchuria - ₹80",
                    "Chilli Gobi - ₹90",
                    "Mushroom Manchuria - ₹110",
                    "Paneer Manchuria - ₹110",
                    "Mushroom 65 - ₹120",
                    "Gobi 65 - ₹120",
                    "Babycorn Manchuria - ₹130",
                    "Paneer 65 - ₹130",
                    "Babycorn 65 - ₹140",
                    "Paneer Majestic - ₹140",
                    "Chilli Paneer - ₹140",
                    "Chilli Mushroom - ₹140",
                    "Chilli Babycorn - ₹150",
                    "Kaju 65 - ₹180",
                    "Kaju Pakodi - ₹190",
                    "Kaju Roast - ₹200"
                ]
            },
            "Biryani": {
                image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=500&h=300&fit=crop",
                items: [
                    "Veg Biryani - ₹120",
                    "Egg Biryani - ₹120",
                    "Mushroom Biryani - ₹150",
                    "Paneer Biryani - ₹180"
                ]
            },
            "Fried Rice & Noodles": {
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop",
                items: [
                    "Jeera - ₹70",
                    "Veg - ₹80",
                    "Babycorn - ₹80",
                    "Paneer - ₹90",
                    "Mushroom - ₹90",
                    "Kaju - ₹90",
                    "Noodles - ₹80",
                    "Schezwan Veg - ₹110",
                    "Schezwan Paneer - ₹110",
                    "Schezwan Mushroom - ₹110",
                    "Schezwan Babycorn - ₹110",
                    "Mixed Veg Fried Rice - ₹150"
                ]
            },
            "Curries": {
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
                items: [
                    "Mixed Veg - ₹110",
                    "Egg Curry / Egg Korma / Egg Masala - ₹120",
                    "Mushroom - ₹140",
                    "Babycorn Curry - ₹140",
                    "Kadai Mushroom - ₹150",
                    "Kaju Curry - ₹160",
                    "Paneer Butter Masala - ₹180",
                    "Kadai Paneer - ₹190",
                    "Kadai Babycorn - ₹150"
                ]
            },
            "Roti & Naan": {
                image: "https://images.unsplash.com/photo-1574653853027-5d6c1ca89ddb?w=500&h=300&fit=crop",
                items: [
                    "Roti - ₹10",
                    "Butter Roti - ₹15",
                    "Kothmeer Roti - ₹20",
                    "Plain Naan - ₹30",
                    "Butter Naan - ₹40",
                    "Kothmeer Naan - ₹50",
                    "Garlic Naan - ₹60",
                    "Plain Kulcha - ₹60",
                    "Butter Kulcha - ₹70"
                ]
            }
        },
        "non-veg": {
            "Soups": {
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop",
                items: [
                    "Chicken Sweet Corn Soup - ₹120",
                    "Chicken Hot Corn Soup - ₹130",
                    "Chicken Manchow Soup - ₹140",
                    "Chicken Lemon Coriander Soup - ₹150",
                    "Chicken Dragon Soup - ₹160",
                    "Mutton Hot Corn Soup - ₹180",
                    "Mutton Soup - ₹190"
                ]
            },
            "Starters - Chicken": {
                image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=300&fit=crop",
                items: [
                    "Chicken Pakoda - ₹110",
                    "Chicken Manchuria - ₹130",
                    "Chicken 65 - ₹140",
                    "Chilli Chicken - ₹150",
                    "Chicken 555 - ₹150",
                    "Chicken Drumstick (Dry) - ₹170",
                    "Pepper Chicken - ₹170",
                    "Chicken Lollipop (Juicy) - ₹180",
                    "Chicken Majestic - ₹160",
                    "Dragon Chicken - ₹160",
                    "Lemon Chicken - ₹180",
                    "Chicken Kabab Pakodi - ₹200",
                    "Kaju Nut Chicken - ₹230",
                    "Crispy Chicken - ₹240"
                ]
            },
            "Starters - Egg": {
                image: "https://images.unsplash.com/photo-1582169296194-f4134b1cc2db?w=500&h=300&fit=crop",
                items: [
                    "Egg Burji - ₹70",
                    "Egg 65 - ₹80",
                    "Chilli Egg - ₹90",
                    "Egg Manchuria - ₹110"
                ]
            },
            "Starters - Mutton": {
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=300&fit=crop",
                items: [
                    "Mutton Manchuria - ₹200",
                    "Mutton 65 - ₹220",
                    "Chilli Mutton - ₹240"
                ]
            },
            "Starters - Fish": {
                image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=300&fit=crop",
                items: [
                    "Fish Roast Bones - ₹80",
                    "Fish Roast Boneless - ₹200",
                    "Fish 65 - ₹210",
                    "Apollo Fish - ₹220",
                    "Chilli Fish - ₹220"
                ]
            },
            "Starters - Prawns": {
                image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&h=300&fit=crop",
                items: [
                    "Prawns Manchuria - ₹160",
                    "Prawns 65 - ₹170",
                    "Chilli Prawns - ₹180",
                    "Loose Prawns - ₹200"
                ]
            },
            "Biryani - Chicken": {
                image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=500&h=300&fit=crop",
                items: [
                    "Plain Biryani Rice - ₹80",
                    "Hyderabad Dum Biryani (Half) - ₹110",
                    "Hyderabad Dum Biryani (Full) - ₹150",
                    "Chicken Fry Piece Biryani - ₹160",
                    "Gongura Chicken Biryani - ₹170",
                    "Chicken Grant Biryani - ₹180",
                    "Chicken Mughlai Biryani - ₹200",
                    "Chicken 65 Biryani - ₹210",
                    "Chicken Lollipop Biryani (Half) - ₹160",
                    "Chicken Lollipop Biryani (Full) - ₹300",
                    "Chicken Dilkush Biryani - ₹600",
                    "Mix Non-Veg Biryani - ₹600",
                    "Hyderabad Dum Biryani (Family Pack) - ₹450",
                    "Hyderabad Dum Biryani (Jumbo Pack) - ₹1150"
                ]
            },
            "Biryani - Mutton": {
                image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=500&h=300&fit=crop",
                items: [
                    "Mutton Dum - ₹320",
                    "Mutton Fry - ₹330",
                    "Mutton Mughlai - ₹340",
                    "Mutton SP - ₹350",
                    "Gongura Mutton - ₹350",
                    "Family Pack - ₹650",
                    "Jumbo Pack - ₹1500"
                ]
            },
            "Fried Rice": {
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop",
                items: [
                    "Egg Fried Rice (Single) - ₹90",
                    "Fish - ₹110",
                    "Chicken - ₹100",
                    "Egg Schezwan - ₹100",
                    "Chicken Schezwan - ₹120",
                    "Prawns - ₹120",
                    "Chicken Box - ₹140",
                    "Chicken SP - ₹150"
                ]
            },
            "Curries - Chicken": {
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
                items: [
                    "Chicken Curry (Bones) - ₹150",
                    "Chicken Kheema Masala - ₹150",
                    "Gongura Chicken - ₹180",
                    "Kadai Chicken - ₹190",
                    "Punjabi Chicken - ₹200",
                    "Butter Chicken - ₹200",
                    "Chicken Mughlai - ₹200",
                    "Mughlai Chicken - ₹230",
                    "Chicken Curry (Boneless) - ₹220",
                    "Afghani Chicken - ₹240",
                    "Hyderabad Chicken - ₹240"
                ]
            },
            "Curries - Mutton": {
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
                items: [
                    "Mutton Curry - ₹270",
                    "Kadai Mutton - ₹300",
                    "Mutton Masala - ₹300"
                ]
            },
            "Curries - Fish & Prawns": {
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
                items: [
                    "Fish Curry - ₹200",
                    "Kacchi Fish - ₹220",
                    "Prawns Curry - ₹220",
                    "Kadai Prawns - ₹220"
                ]
            },
            "Tandoori & Kababs": {
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=300&fit=crop",
                items: [
                    "Tangdi Kabab Half (2 pcs) - ₹150",
                    "Chicken Tikka Half (4 pcs) - ₹160",
                    "Chicken Haryali Tikka Half - ₹170",
                    "Reshmi Kabab Half - ₹170",
                    "Chicken Tikka Full (8 pcs) - ₹300",
                    "Chicken Haryali Tikka Full - ₹330",
                    "Reshmi Kabab Full - ₹340",
                    "Tandoori Chicken Half (4 pcs) - ₹270",
                    "Tandoori Chicken Full (8 pcs) - ₹510",
                    "Fish Tikka - ₹220",
                    "Prawns Tikka - ₹320",
                    "Malai Kabab (4 pcs) - ₹320"
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
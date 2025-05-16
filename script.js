const properties = [
  {
    id: 1,
    type: "House For Sale",
    price: "$3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    street: "2856 Meadow Park Ave",
    city: "Henderson, NV 89052",
    address: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
    days: "6 days on Houzeo",
    views: "2.3K",
    image: "images/1.png"
  },
  {
    id: 2,
    type: "Condo For Sale",
    price: "$3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    street: "2856 Meadow Park Ave",
    city: "Henderson, NV 89052",
    address: "Sotheby's International Realty",
    days: "12 days on Houzeo",
    views: "2.3K",
    image: "images/2.png"
  },
  {
    id: 3,
    type: "Multi-family home For Sale",
    price: "$3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    street: "2856 Meadow Park Ave",
    city: "Henderson, NV 89052",
    address: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
    days: "—", // No badge on top
    views: "2.3K",
    image: "images/3.png"
  },
  {
    id: 4,
    type: "House For Sale",
    price: "$3,349,000",
    beds: 4,
    baths: 3,
    sqft: 998,
    street: "2856 Meadow Park Ave",
    city: "Henderson, NV 89052",
    address: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
    days: "10 days on Houzeo",
    views: "2.3K",
    image: "images/4.png"
  }
];

$(document).ready(function () {
  const container = $(".property-list");
  
  properties.forEach(prop => {
    const card = `
  <div class="houseCard">
    <div class="imageOffer">
      <img src=${prop.image} alt="Property Image" style="width:100%;">
      ${prop.days !== "—" ? `<div class="top-left">${prop.days}</div>` : ""}
      <div class="top-right heart-icon">♡</div>
    </div>
    <div class="tagViews">
      <div class="forsale">
        <span class="green-dot"></span> ${prop.type}
      </div>
      <div class="views">
        <img src="images/eye.png"/>2.3k
      </div>
    </div>
    <div class="details">
      <div class="price">
        ${prop.price}
      </div>
      <div class="beds">
        <span>${prop.beds}</span> beds
      </div>
      <div class="baths">
        <span>${prop.baths}</span> baths
      </div>
      <div class="sqft">
        <span>${prop.sqft}</span> sqft
      </div>
    </div>
    <div class="desc">
      <span>${prop.city}</span><br>
      <span>${prop.address}</span>
    </div>
  </div>
`;
    // const card = `
    //   <div class="property-card">
    //   <div>${prop.days !== "—" ? `<div class="label-top">${prop.days}</div>` : ""}</div>
    //     <div class="property-image-container">
    //     <div>
    //     </div>
    //       <img src="${prop.image}" alt="Property Image" />
    //       <div class="logo-overlay">
    //         <img src="images/logo.png" alt="MLS Logo" />
    //       </div>
    //       <div class="heart-icon" title="Favorite">♡</div>
    //     </div>
    //     <div class="property-body">
    //       <div class="property-meta">
    //         <span class="green-dot"></span> ${prop.type}
    //         <div class="views" title="Views">
    //           <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="16" height="16" style="vertical-align: middle;">
    //             <path d="M12 6.5C7 6.5 3.73 10.61 3 12c.73 1.39 4 5.5 9 5.5s8.27-4.11 9-5.5c-.73-1.39-4-5.5-9-5.5zm0 8a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-3.5a1 1 0 100 2 1 1 0 000-2z"/>
    //           </svg> ${prop.views}
    //         </div>
    //       </div>
    //       <div class="property-price">${prop.price}</div>
    //       <div class="property-info">
    //         <span><strong>${prop.beds}</strong> Beds</span>
    //         <span><strong>${prop.baths}</strong> Baths</span>
    //         <span><strong>${prop.sqft}</strong> sqft</span>
    //       </div>
    //       <div class="property-address">
    //         <strong>${prop.street}</strong>, ${prop.city}
    //       </div>
    //       <div class="property-source">${prop.address}</div>
    //     </div>
    //   </div>
    // `;
    container.append(card);
  });
});

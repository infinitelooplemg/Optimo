import { PRODUCTS_FETCH_SUCCESS } from "./ActionTypes";

export const getProducts = () => {
  return dispatch => dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: items });
};

const items = [
  {
    name: "Dramamine Orange",
    company_name: "Medtech Products Inc.",
    price: "$915.24",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
  },
  {
    name: "Fluconazole",
    company_name: "Aurobindo Pharma Limited",
    price: "$481.10",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
  },
  {
    name: "No7 Lifting and Firming Foundation Sunscreen SPF 15 Blonde",
    company_name: "Boots Retail USA Inc",
    price: "$960.63",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
  },
  {
    name: "PREDNISONE",
    company_name: "STAT Rx USA LLC",
    price: "$214.31",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
  },
  {
    name: "Jade",
    company_name: "Whisk Products, Inc.",
    price: "$170.97",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
  },
  {
    name: "Hydrogen Peroxide",
    company_name: "Kmart Corp",
    price: "$810.50",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
  },
  {
    name: "MAMONDE BRIGHTENING PACT 10HR N21",
    company_name: "AMOREPACIFIC",
    price: "$486.16",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
  },
  {
    name: "Chlorthalidone",
    company_name: "Bryant Ranch Prepack",
    price: "$850.52",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
  },
  {
    name: "Verapamil Hydrochloride",
    company_name: "Mylan Institutional Inc.",
    price: "$981.07",
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
  },
  {
    name: "Stavudine",
    company_name: "Aurobindo Pharma Limited",
    price: "$610.60",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
  },
  {
    name: "Lorazepam",
    company_name: "Aidarex Pharmaceuticals LLC",
    price: "$608.75",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
  },
  {
    name: "Stannum 5",
    company_name: "Uriel Pharmacy Inc.",
    price: "$751.24",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
  },
  {
    name: "Flu Relief Therapy Night Time",
    company_name: "CVS",
    price: "$750.41",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
  },
  {
    name: "Witch Hazel",
    company_name: "Cardinal Health",
    price: "$593.25",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
  },
  {
    name: "Minocycline hydrochloride",
    company_name: "Bryant Ranch Prepack",
    price: "$174.19",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
  },
  {
    name: "EPIDUO",
    company_name: "Physicians Total Care, Inc.",
    price: "$900.47",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
  },
  {
    name: "Assured",
    company_name: "Zhejiang Bangli Medical Products Co., Ltd",
    price: "$880.28",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
  },
  {
    name: "Stool Softener plus Stimulant Laxative",
    company_name: "The Kroger Co.",
    price: "$236.49",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
  },
  {
    name: "Doxycycline",
    company_name: "General Injectables & Vaccines, Inc",
    price: "$666.57",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    name: "Edluar",
    company_name: "Meda Pharmaceuticals Inc.",
    price: "$396.89",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
  }
];

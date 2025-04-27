import { useState, useEffect } from "react";
import { useToxicContext } from "../context/ToxicContext";

function Shop() {
  const { triggerToxicPattern } = useToxicContext();
  const [products, setProducts] = useState(Array.from({ length: 6 }, (_, i) => i + 1));
  const [showPopup, setShowPopup] = useState(false);
  const [timer, setTimer] = useState(300);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'sub-1',
      name: 'Premium Membership (Auto-enrolled)',
      price: 9.99,
      type: 'subscription'
    }
  ]);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [viewerCount, setViewerCount] = useState(15);
  const [showRetentionPopup, setShowRetentionPopup] = useState(false);

  const productImages = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
    "https://picsum.photos/400/300?random=6"
  ];

  const productNames = [
    "Premium Widget",
    "Super Gadget",
    "Ultra Device",
    "Mega Tool",
    "Deluxe Item",
    "Elite Product"
  ];
  
  const addToCart = (product) => {
    setCartItems(prev => {
      const hasPremium = prev.some(item => item.id === 'sub-1');
      
      if (!hasPremium) {
        return [...prev, 
          {
            id: 'sub-1',
            name: 'Premium Membership (Auto-enrolled)',
            price: 9.99,
            type: 'subscription'
          },
          {
            id: product.id,
            name: product.name,
            price: product.price
          }
        ];
      }
      
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price
      }];
    });
  
    setShowPopup(true);
    const notification = document.createElement('div');
    notification.className = 'fixed top-40 right-20 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
    notification.textContent = 'Added to cart!';
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 2000);
  };

  const removeFromCart = (itemId) => {
    if (itemId === 'sub-1') {
      setShowRetentionPopup(true);
    } else {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const shipping = checkoutStep === 2 ? 14.99 : 0;
    const handlingFee = 4.99;
    return (subtotal + shipping + handlingFee).toFixed(2);
  };
  
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderCheckoutStep = () => {
    switch(checkoutStep) {
        case 0:
            return (
              <div className="space-y-4">
                <h3 className="text-red-600 font-bold">Create Account to Continue</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  triggerToxicPattern("Submitted personal email and created account");
                  setCheckoutStep(1);
                }}>
                  <input 
                    type="email" 
                    placeholder="Email*"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                  <input 
                    type="password" 
                    placeholder="Password*"
                    className="w-full p-2 border rounded"
                    required
                  />
                  <div className="text-xs text-gray-500 mt-2">
                    * By creating an account, you agree to our Terms of Service, Privacy Policy, 
                    and to receive marketing emails which you cannot opt out of.
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-4"
                  >
                    Create Account & Continue
                  </button>
                </form>
                <button 
                  onClick={() => setCheckoutStep(1)}
                  className="w-full text-gray-100 py-2 rounded hover:text-gray-200 mt-4"
                  style={{ textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
                >
                  continue without account
                </button>
              </div>
            );
            case 1:
                return (
                  <div className="space-y-4">
                    <h3 className="font-bold">Additional Required Information</h3>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get('fullName');
                      const phone = formData.get('phone');
                      const address = formData.get('address');
              
                      if (name || phone || address) {
                        triggerToxicPattern("Submitted unnecessary personal information");
                      }
                      
                      setCheckoutStep(2);
                    }}>
                      <input 
                        type="text" 
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded mb-4"
                      />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Delivery email address*"
                        className="w-full p-2 border rounded mb-4"
                        required
                      />
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full p-2 border rounded mb-4"
                      />
                      <input 
                        type="text" 
                        name="address"
                        placeholder="Address"
                        className="w-full p-2 border rounded"
                      />
                      <div className="text-xs text-gray-500 mt-2">
                        * Almost all fields are mandatory for enhanced customer experience
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-4"
                      >
                        Submit & Continue
                      </button>
                    </form>
                  </div>
                );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="font-bold">Order Summary</h3>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Shipping & Handling:</span>
                <span>$14.99</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Processing Fee:</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="container mx-auto py-10 px-4">
        <div className="fixed top-40 right-20 z-40">
            <button
            onClick={() => setShowCart(true)}
            className="bg-white shadow-lg rounded-full p-4 flex items-center space-x-2 hover:bg-gray-50"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
            </span>
            </button>
        </div>
      <h2 className="text-3xl font-semibold mb-6">Welcome to Our Online Store</h2>
      <div className="bg-red-100 p-4 mb-6 rounded">
        <p className="text-red-600 font-bold">🔥 Flash Sale ends in: {formatTime(timer)}</p>
        <p className="text-sm">👀 {viewerCount} other people are viewing this page</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((id) => (
          <div key={id} className="border rounded-xl shadow hover:shadow-lg transition duration-300 p-4 relative">
            {id % 2 === 0 && (
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                Only 2 left!
              </div>
            )}
            <img 
              src={productImages[id - 1]} 
              alt={productNames[id - 1]}
              className="w-full h-40 object-cover rounded mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold text-lg">{productNames[id - 1]}</h3>
            <p className="text-gray-600">Limited offer! Ends soon.</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 line-through">${(29.99 + id * 0.1).toFixed(2)}</span>
              <span className="text-red-600 font-bold">${(19.99 + id * 0.1).toFixed(2)}</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">-33%</span>
            </div>
            <button
              onClick={() => addToCart({
                id: id,
                name: productNames[id - 1],
                price: 19.99 + id * 0.1
              })
            }
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
            <p className="text-xs text-gray-400 mt-2">
              *Price doesn't include mandatory handling fee ($4.99)
            </p>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[480px]">
            <h3 className="text-xl font-bold mb-4">🎉 Special Offer!</h3>
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="https://picsum.photos/200/150?random=7" 
                alt="Recommended Product"
                className="w-32 h-24 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold">Premium Bundle Pack</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Complete your purchase with this amazing deal!
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through">$49.99</span>
                  <span className="text-red-600 font-bold">$29.99</span>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">-40%</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setShowPopup(false);
              }}
              className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
            >
              No thanks, I hate saving money
            </button>
            <button
              onClick={() => {
                triggerToxicPattern("Accepted manipulative offer");
                setShowPopup(false);
                addToCart({
                  id: 'bundle-1',
                  name: 'Premium Bundle Pack',
                  price: 29.99
                });
                setShowCart(true);
              }}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Yes, add to cart!
            </button>
          </div>
        </div>
      )}

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[480px] max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Your Cart</h3>
            <div className="space-y-4 mb-6">
            {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center group relative">
                    <div>
                    <div className="font-semibold">{item.name}</div>
                    {item.type === 'subscription' && (
                        <div className="text-xs text-gray-500">Billed monthly</div>
                    )}
                    </div>
                    <div className="flex items-center gap-4">
                    <div>${item.price.toFixed(2)}</div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        ✕
                    </button>
                    </div>
                </div>
                ))}
            </div>
            
            {renderCheckoutStep()}

            <div className="mt-6">
                <button
                    onClick={() => {
                        setShowCart(false);
                        setCheckoutStep(0);
                    }}
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
                >
                    Cancel
                </button>
            </div>
          </div>
        </div>
      )}
      {showRetentionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[60]">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-[480px]">
            <h3 className="text-xl font-bold mb-4">🎁 Special Offer Just For You!</h3>
            <p className="text-gray-600 mb-4">
                Wait! As a valued customer, we'll give you <span className="font-bold text-green-600">FREE SHIPPING</span> on 
                all orders for the next 3 months with your Premium Membership!
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-yellow-800">
                * By accepting this offer, you agree to keep your Premium Membership for at least 3 months.
                Regular price of $9.99/month applies after the promotional period.
                </p>
            </div>
            <button
                onClick={() => {
                triggerToxicPattern("Accepted manipulative retention offer");
                setShowRetentionPopup(false);
                }}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-2"
            >
                Yes, I want free shipping!
            </button>
            <button
                onClick={() => {
                    setCartItems(prev => prev.filter(item => item.id !== 'sub-1'));
                    setShowRetentionPopup(false);
                }}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 text-sm"
            >
                No thanks, I prefer paying for shipping
            </button>
            </div>
        </div>
        )}
    </main>
  );
}
export default Shop;
// إضافة وظيفة التمرير للخدمات
function scrollToService(serviceName) {
  // البحث عن العنصر الذي يحمل اسم الخدمة
  const serviceItems = document.querySelectorAll('.service-item');
  for (let item of serviceItems) {
    if (item.getAttribute('data-service') === serviceName) {
      // فتح الـ details إذا كان مغلقاً
      if (!item.hasAttribute('open')) {
        item.setAttribute('open', '');
      }
      
      // التمرير للعنصر مع إضافة مسافة علوية (offset) للناف بار
      const offset = 100;
      const elementPosition = item.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
      
      // إضافة تأثير وميض للإشارة للخدمة
      item.style.transition = 'box-shadow 0.3s ease';
      item.style.boxShadow = '0 0 20px 5px rgba(93, 226, 255, 0.6)';
      setTimeout(() => {
        item.style.boxShadow = '';
      }, 1500);
      
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const marqueeScrollArea = document.querySelector('.marquee-scroll-area');
  if (marqueeScrollArea) {
    const track = marqueeScrollArea.querySelector('.marquee-track');
    
    // Duplicate the entire track content to ensure seamless scrolling
    track.innerHTML += track.innerHTML;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    let scrollSpeed = 0.8; // سرعة التمرير التلقائي
    let currentScroll = 0;
    let isHovered = false;

    // Auto scroll function
    const scrollAnimation = () => {
      if (!isDown && !isHovered) {
        currentScroll += scrollSpeed;
        
        // When we scrolled half of the duplicated content, reset back to 0 seamlessly
        if (currentScroll >= track.scrollWidth / 2) {
          currentScroll = 0;
        }
        
        // If scrolling backwards (dragging right) past 0, jump to middle
        if (currentScroll <= 0) {
          currentScroll = track.scrollWidth / 2;
        }
        
        marqueeScrollArea.scrollLeft = currentScroll;
      }
      requestAnimationFrame(scrollAnimation);
    };

    // Pause on hover
    marqueeScrollArea.addEventListener('mouseenter', () => isHovered = true);
    marqueeScrollArea.addEventListener('mouseleave', () => {
      isHovered = false;
      isDown = false;
      marqueeScrollArea.style.cursor = 'grab';
    });

    let isDragging = false;

    // Drag to scroll functionality
    marqueeScrollArea.addEventListener('mousedown', (e) => {
      isDown = true;
      isDragging = false;
      marqueeScrollArea.style.cursor = 'grabbing';
      startX = e.pageX - marqueeScrollArea.offsetLeft;
      scrollLeft = marqueeScrollArea.scrollLeft;
      currentScroll = scrollLeft;
    });

    marqueeScrollArea.addEventListener('mouseup', () => {
      isDown = false;
      marqueeScrollArea.style.cursor = 'grab';
    });

    marqueeScrollArea.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - marqueeScrollArea.offsetLeft;
      const walk = (x - startX) * 2;
      if (Math.abs(walk) > 5) {
        isDragging = true;
      }
      marqueeScrollArea.scrollLeft = scrollLeft - walk;
      currentScroll = marqueeScrollArea.scrollLeft;
    });

    // Prevent click if dragging
    marqueeScrollArea.addEventListener('click', (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Touch events for mobile dragging
    marqueeScrollArea.addEventListener('touchstart', (e) => {
      isDown = true;
      isDragging = false;
      startX = e.touches[0].pageX - marqueeScrollArea.offsetLeft;
      scrollLeft = marqueeScrollArea.scrollLeft;
      currentScroll = scrollLeft;
      isHovered = true; // Pause animation while touching
    }, {passive: true});

    marqueeScrollArea.addEventListener('touchend', () => {
      isDown = false;
      isHovered = false;
    });

    marqueeScrollArea.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - marqueeScrollArea.offsetLeft;
      const walk = (x - startX) * 2;
      if (Math.abs(walk) > 5) {
        isDragging = true;
      }
      marqueeScrollArea.scrollLeft = scrollLeft - walk;
      currentScroll = marqueeScrollArea.scrollLeft;
    }, {passive: true});

    // Start animation
    marqueeScrollArea.style.cursor = 'grab';
    requestAnimationFrame(scrollAnimation);
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Configuration ---
  const GOOGLE_CLIENT_ID = "65226075677-5kgkl2q5a08psc9cbqlpdfehvofi8u53.apps.googleusercontent.com";
  const ADMIN_EMAIL = "motazz.13579@gmail.com";
  const WELCOME_SPLASH_SHOW_MS = 900;
  const WHATSAPP_NUMBER = "962798205807";
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDNFbxi4-u8At88pnO60H-p1pbBz0Z2Vtc",
    authDomain: "m7mod-1b1c7.firebaseapp.com",
    projectId: "m7mod-1b1c7",
    storageBucket: "m7mod-1b1c7.firebasestorage.app",
    messagingSenderId: "65226075677",
    appId: "1:65226075677:web:5381d193b3d6d2d2df60f4",
    measurementId: "G-0T7SRF8C04"
  };

  // --- Elements ---
  const welcomeSplash = document.getElementById("welcomeSplash");
  const authGate = document.getElementById("authGate");
  const gateGoogleSignIn = document.getElementById("gateGoogleSignIn");
  const userChip = document.getElementById("userChip");
  const userAvatar = document.getElementById("userAvatar");
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userMenuBtn = document.getElementById("userMenuBtn");
  const userDropdown = document.getElementById("userDropdown");
  const logoutBtn = document.getElementById("logoutBtn");
  const adminTopButton = document.getElementById("adminTopButton");
  const adminPanel = document.getElementById("adminPanel");
  const adminCloseBtn = document.getElementById("adminCloseBtn");
  const adminSearchInput = document.getElementById("adminSearchInput");
  const adminStatusFilter = document.getElementById("adminStatusFilter");
  const adminTotalCount = document.getElementById("adminTotalCount");
  const adminNewCount = document.getElementById("adminNewCount");
  const adminActiveCount = document.getElementById("adminActiveCount");
  const adminBlockedCount = document.getElementById("adminBlockedCount");
  const adminNewBody = document.getElementById("adminNewBody");
  const adminActiveBody = document.getElementById("adminActiveBody");
  const adminBlockedBody = document.getElementById("adminBlockedBody");
  const adminDeleteModal = document.getElementById("adminDeleteModal");
  const adminDeleteConfirmBtn = document.getElementById("adminDeleteConfirmBtn");
  const adminDeleteCancelBtn = document.getElementById("adminDeleteCancelBtn");

  const cartItemsBody = document.getElementById("cartItemsBody");
  const cartTotalCount = document.getElementById("cartTotalCount");
  const cartTotalPrice = document.getElementById("cartTotalPrice");
  const cartCount = document.getElementById("cartCount");
  const cartOpenBtn = document.getElementById("cartOpenBtn");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartClearBtn = document.getElementById("cartClearBtn");
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
  const cartModal = document.getElementById("cartModal");

  // Promo Popup Logic
  const offers = [
    { title: "شاهد مشترك - سنة", desc: "استمتع بأقوى المسلسلات والأفلام مع باقة شاهد المشترك لمدة سنة كاملة.", price: "15 دينار", img: "./-_Shahid.jpg" },
    { title: "نتفليكس - شهر", desc: "أحدث الأفلام والمسلسلات الحصرية بدقة عالية وبدون انقطاع.", price: "4 دنانير", img: "./Netflix_logo_designed_in_pixellabe_mobile_.jpg" },
    { title: "يوتيوب بريميوم - سنة", desc: "مشاهدة بدون إعلانات، تشغيل في الخلفية، يوتيوب ميوزك.", price: "18 دينار", img: "./YouTube_Logo_Png-removebg-preview.png" },
    { title: "ChatGPT Plus", desc: "أنجز أعمالك ومهامك بسرعة مع الذكاء الاصطناعي الأقوى عالمياً.", price: "19 دينار", img: "./ChatGPT_Logo_-_Chat_gpt_Icon_on_White_Background.jpg" },
    { title: "سناب شات بلس", desc: "مميزات حصرية واشتراك مميز بانتظارك، تميز بين أصدقائك.", price: "12 دينار", img: "./Snapchat_Logo_PNG_Vector_EPS_Free_Download.jpg" },
  ];

  const promoModal = document.getElementById('promoModal');
  const promoClose = document.getElementById('promoClose');
  const promoImg = document.getElementById('promoImg');
  const promoTitle = document.getElementById('promoTitle');
  const promoDesc = document.getElementById('promoDesc');
  const promoPrice = document.getElementById('promoPrice');
  const promoAction = document.getElementById('promoAction');

  let currentOffer = null;
  let promoCount = 0;

  const showPromo = () => {
    // Pick random offer
    currentOffer = offers[Math.floor(Math.random() * offers.length)];
    promoImg.src = currentOffer.img;
    promoTitle.textContent = currentOffer.title;
    promoDesc.textContent = currentOffer.desc;
    promoPrice.textContent = currentOffer.price;
    
    promoModal.hidden = false;
    document.body.classList.add('modal-open');
    // trigger reflow
    void promoModal.offsetWidth;
    promoModal.classList.add('show');
  };

  const scheduleNextPromo = () => {
    let delay = 20000; // 20 seconds for first time
    if (promoCount === 1) {
      delay = 50000; // 50 seconds for second time
    } else if (promoCount >= 2) {
      delay = 60000; // 60 seconds for third time and above
    }
    
    setTimeout(tryShowPromo, delay);
  };

  const closePromo = () => {
    promoModal.classList.remove('show');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
      promoModal.hidden = true;
      scheduleNextPromo(); // Schedule next ad only after closing the current one
    }, 400); // match CSS transition
  };

  const tryShowPromo = () => {
    if (promoModal.hidden && !document.body.classList.contains('modal-open')) {
      showPromo();
      promoCount++;
    } else {
      // If modal is already open (e.g., cart is open), wait 5 seconds and try again
      setTimeout(tryShowPromo, 5000);
    }
  };

  if (promoModal && promoClose) {
    promoClose.addEventListener('click', closePromo);
    promoModal.addEventListener('click', (e) => {
      if(e.target === promoModal) closePromo();
    });
    
    promoAction.addEventListener('click', () => {
      // Simulate order
      const text = encodeURIComponent(`مرحباً، أريد طلب العرض المميز: ${currentOffer.title} بسعر ${currentOffer.price}`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
      closePromo();
    });

    // Start the promo cycle
    scheduleNextPromo();
  }

  // --- State Variables ---
  let cartItemsCache = [];
  let subscribersCache = [];
  let adminSearchValue = "";
  let adminStatusValue = "all";
  let pendingDeleteSubscriberId = "";

  // --- Firebase Init ---
  const firebaseReady = typeof firebase !== "undefined";
  if (firebaseReady && !firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  const firestoreDb = firebaseReady ? firebase.firestore() : null;
  const firebaseAuth = firebaseReady ? firebase.auth() : null;
  const subscribersCollectionRef = firestoreDb ? firestoreDb.collection("subscribers") : null;

  // --- Helper Functions ---
  const getTodayDateKey = () => new Date().toISOString().split('T')[0];
  const getSavedUser = () => {
    try {
      const val = localStorage.getItem("ds_user");
      return val ? JSON.parse(val) : null;
    } catch { return null; }
  };
  const saveUser = (user) => localStorage.setItem("ds_user", JSON.stringify(user));
  const clearUser = () => localStorage.removeItem("ds_user");

  const decodeJwtPayload = (token) => {
    try {
      const payloadPart = token.split(".")[1];
      const base64 = payloadPart.replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(atob(base64));
    } catch { return null; }
  };

  const isAdminEmail = (email) => String(email || "").trim().toLowerCase() === ADMIN_EMAIL;

  const updateAdminVisibility = (user) => {
    const isAd = user && isAdminEmail(user.email);
    if (adminTopButton) {
      if (isAd) adminTopButton.removeAttribute("hidden");
      else adminTopButton.setAttribute("hidden", "");
    }
  };

  const openAuthGate = () => { if (authGate) authGate.removeAttribute("hidden"); };
  const closeAuthGate = () => { if (authGate) authGate.setAttribute("hidden", ""); };

  // --- Cart System ---
  const loadCart = () => {
    try {
      const val = localStorage.getItem("ds_cart");
      cartItemsCache = val ? JSON.parse(val) : [];
      updateCartUI();
    } catch { cartItemsCache = []; }
  };

  const saveCart = () => {
    localStorage.setItem("ds_cart", JSON.stringify(cartItemsCache));
    updateCartUI();
  };

  const updateCartUI = () => {
    if (cartCount) {
      cartCount.textContent = cartItemsCache.length;
      cartCount.toggleAttribute("hidden", cartItemsCache.length === 0);
    }
    if (cartTotalCount) cartTotalCount.textContent = cartItemsCache.length;
    let total = 0;
    if (cartItemsBody) {
      cartItemsBody.innerHTML = cartItemsCache.map((item, index) => {
        const priceNum = parseFloat(item.price.replace(" دينار", "").replace(" دنانير", "")) || 0;
        total += priceNum;
        return `
          <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid rgba(255,255,255,0.1)">
            <div class="cart-item-info">
              <h6 style="margin:0; color:#fff">${item.service}</h6>
              <p style="margin:0; font-size:0.8rem; color:rgba(255,255,255,0.6)">${item.duration} - ${item.price}</p>
            </div>
            <button class="btn btn-ghost cart-remove" data-index="${index}" style="color:#ff6b6b; padding:5px 10px; cursor:pointer">حذف</button>
          </div>
        `;
      }).join("");
    }
    if (cartTotalPrice) cartTotalPrice.textContent = `${total} دينار`;
  };

  const addToCart = (product) => {
    cartItemsCache.push(product);
    saveCart();
    cartOpenBtn?.classList.add("pulse");
    setTimeout(() => cartOpenBtn?.classList.remove("pulse"), 500);
  };

  const checkoutCart = () => {
    if (cartItemsCache.length === 0) return alert("السلة فارغة");
    let message = "مرحبًا Digital Store، أود طلب الاشتراكات التالية:\n\n";
    cartItemsCache.forEach((item, i) => {
      message += `${i + 1}. ${item.service} (${item.duration}) - ${item.price}\n`;
    });
    const total = cartItemsCache.reduce((sum, item) => sum + (parseFloat(item.price.replace(" دينار", "").replace(" دنانير", "")) || 0), 0);
    message += `\nالإجمالي: ${total} دينار`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // --- Admin System ---
  const pullSubscribers = async () => {
    if (!subscribersCollectionRef) return;
    try {
      const snapshot = await subscribersCollectionRef.get();
      subscribersCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      renderAdminPanel();
    } catch (error) {
      console.error("Error pulling subscribers:", error);
    }
  };

  const saveSubscriber = async (id, data) => {
    if (!subscribersCollectionRef) return;
    try {
      await subscribersCollectionRef.doc(id).update({
        ...data,
        updatedAt: new Date().toISOString(),
        isNew: false
      });
      pullSubscribers();
    } catch (error) {
      alert("فشل الحفظ");
    }
  };

  const deleteSubscriber = async (id) => {
    if (!subscribersCollectionRef) return;
    try {
      await subscribersCollectionRef.doc(id).delete();
      pullSubscribers();
      if (adminDeleteModal) adminDeleteModal.setAttribute("hidden", "");
    } catch (error) {
      alert("فشل الحذف");
    }
  };

  const renderAdminPanel = () => {
    const today = new Date();
    const todayKey = getTodayDateKey();
    
    let totalCount = 0, newCount = 0, activeCount = 0, blockedCount = 0, nearCount = 0, expiredCount = 0;

    const filtered = subscribersCache.filter(s => {
      const name = String(s.name || "").toLowerCase();
      const email = String(s.email || "").toLowerCase();
      const customerNumber = String(s.customerNumber || "");
      const matchSearch = !adminSearchValue || name.includes(adminSearchValue) || email.includes(adminSearchValue) || customerNumber.includes(adminSearchValue);
      
      if (!matchSearch) return false;

      let hasActive = false;
      let hasNear = false;
      let hasExpired = false;
      
      const subs = Array.isArray(s.subscriptions) ? s.subscriptions : [];
      if (subs.length > 0) {
          subs.forEach(sub => {
              if (sub.end < todayKey) hasExpired = true;
              else {
                  const endDate = new Date(sub.end);
                  const diffDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
                  if (diffDays <= 3) hasNear = true;
                  else hasActive = true;
              }
          });
      } else {
          if (s.isBlocked) hasExpired = true;
      }

      if (adminStatusValue === "all") return true;
      if (adminStatusValue === "new") return s.isNew;
      if (adminStatusValue === "blocked") return s.isBlocked;
      if (adminStatusValue === "active") return hasActive || hasNear;
      if (adminStatusValue === "near_expiry") return hasNear;
      if (adminStatusValue === "expired") return hasExpired && !hasActive && !hasNear;
      
      return true;
    });

    // Calculate stats globally
    subscribersCache.forEach(s => {
      totalCount++;
      if (s.isNew) newCount++;
      if (s.isBlocked) blockedCount++;
      const subs = Array.isArray(s.subscriptions) ? s.subscriptions : [];
      let sActive = false, sNear = false, sExp = false;
      subs.forEach(sub => {
          if (sub.end < todayKey) sExp = true;
          else {
              const diffDays = Math.ceil((new Date(sub.end) - today) / (1000 * 60 * 60 * 24));
              if (diffDays <= 3) sNear = true;
              else sActive = true;
          }
      });
      if (sActive || sNear) activeCount++;
      if (sNear) nearCount++;
      if ((sExp && !sActive && !sNear) || (!sActive && !sNear && !s.isNew && !s.isBlocked)) expiredCount++;
    });

    if (document.getElementById("adminTotalCount")) document.getElementById("adminTotalCount").textContent = totalCount;
    if (document.getElementById("adminNewCount")) document.getElementById("adminNewCount").textContent = newCount;
    if (document.getElementById("adminActiveCount")) document.getElementById("adminActiveCount").textContent = activeCount;
    if (document.getElementById("adminBlockedCount")) document.getElementById("adminBlockedCount").textContent = blockedCount;
    if (document.getElementById("adminNearExpiryCount")) document.getElementById("adminNearExpiryCount").textContent = nearCount;
    if (document.getElementById("adminExpiredCount")) document.getElementById("adminExpiredCount").textContent = expiredCount;

    const renderRows = (data) => data.map(s => {
      const subs = Array.isArray(s.subscriptions) ? s.subscriptions : [];
      let subsHtml = subs.map((sub, idx) => {
        const endDate = new Date(sub.end);
        const diffDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
        let statusClass = "status-expired";
        if (sub.end >= todayKey) {
          statusClass = diffDays <= 3 ? "status-near" : "status-active";
        }
        return `
          <div class="sub-row ${statusClass}" data-idx="${idx}">
            <input type="text" class="sub-service" value="${sub.service}" placeholder="اسم الخدمة (مثال: نتفلكس)">
            <input type="date" class="sub-start" title="تاريخ البدء" value="${sub.start}">
            <input type="date" class="sub-end" title="تاريخ الانتهاء" value="${sub.end}">
            <button class="btn-remove-sub" title="حذف الاشتراك"><i class="fa-solid fa-trash"></i></button>
          </div>
        `;
      }).join("");

      const statusBadge = s.isBlocked ? `<span class="admin-status admin-status-expired">محظور</span>` : 
                          (s.isNew ? `<span class="admin-status admin-status-new">جديد</span>` : 
                          `<span class="admin-status admin-status-active">مسجل</span>`);

      return `
        <tr data-id="${s.id}">
          <td>
              <div style="display:flex; align-items:center; gap:12px;">
                  <img src="${s.picture || 'https://via.placeholder.com/50'}" style="width:48px; height:48px; border-radius:50%; border:2px solid rgba(149, 214, 255, 0.2);">
                  <div>
                      <strong style="display:block; font-size:1rem; margin-bottom:4px; color:#fff;">${s.name} ${statusBadge}</strong>
                      <span class="copy-badge copy-btn" data-copy="${s.email}" title="نسخ الإيميل"><i class="fa-regular fa-envelope"></i> ${s.email}</span>
                      <br>
                      <span class="copy-badge copy-btn" data-copy="${s.customerNumber || ''}" title="نسخ رقم العميل"><i class="fa-solid fa-hashtag"></i> العميل: ${s.customerNumber || 'N/A'}</span>
                  </div>
              </div>
          </td>
          <td style="font-size:0.85rem; color:rgba(255,255,255,0.7); line-height:1.8;">
              <div><i class="fa-solid fa-right-to-bracket" style="width:16px; color:var(--brand)"></i> آخر دخول:<br><strong style="color:#fff">${s.lastLoginAt ? new Date(s.lastLoginAt).toLocaleDateString('ar-EG') : '-'}</strong></div>
              <div style="margin-top:8px;"><i class="fa-solid fa-calendar-plus" style="width:16px; color:var(--brand)"></i> التسجيل:<br><strong style="color:#fff">${s.firstLoginAt ? new Date(s.firstLoginAt).toLocaleDateString('ar-EG') : '-'}</strong></div>
          </td>
          <td class="subs-cell">
            <div class="subs-list">${subsHtml}</div>
            <button class="btn btn-ghost add-sub-btn" style="width:100%; margin-top:8px; border:1px dashed rgba(149, 214, 255, 0.3); font-size:0.85rem; color:var(--brand);"><i class="fa-solid fa-plus"></i> إضافة اشتراك جديد للعميل</button>
          </td>
          <td><textarea class="admin-input notes" placeholder="اكتب ملاحظاتك هنا...">${s.notes || ''}</textarea></td>
          <td>
            <div class="admin-row-actions">
              <button class="btn btn-primary save-sub" style="background:var(--brand); color:#00224e; font-weight:bold;"><i class="fa-solid fa-floppy-disk"></i> حفظ</button>
              <button class="btn ${s.isBlocked ? 'btn-unblock' : 'btn-danger'}" data-action="toggle-block" style="background:${s.isBlocked ? '#3498db' : 'transparent'}; border: 1px solid ${s.isBlocked ? '#3498db' : '#e74c3c'}; color:${s.isBlocked ? '#fff' : '#e74c3c'}">
                <i class="fa-solid ${s.isBlocked ? 'fa-unlock' : 'fa-ban'}"></i> ${s.isBlocked ? 'فك الحظر' : 'حظر'}
              </button>
              <button class="btn btn-ghost delete-sub" style="color:#ff6b6b; border: 1px solid rgba(255,107,107,0.2);"><i class="fa-solid fa-user-minus"></i> حذف</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    const tbody = document.getElementById("adminMasterBody");
    if (tbody) {
        if (filtered.length > 0) tbody.innerHTML = renderRows(filtered);
        else tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:50px; color:rgba(255,255,255,0.5); font-size:1.1rem;"><i class="fa-solid fa-folder-open" style="font-size:2rem; display:block; margin-bottom:10px; opacity:0.5;"></i> لا يوجد بيانات مطابقة للبحث أو الفلتر</td></tr>`;
    }
  };

  // --- User System ---
  const upsertUser = async (user, credential) => {
    if (!subscribersCollectionRef || !firebaseAuth) return;
    try {
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(credential);
      await firebaseAuth.signInWithCredential(googleCredential);
      const id = `email_${encodeURIComponent(user.email.toLowerCase())}`;
      const now = new Date().toISOString();
      const doc = await subscribersCollectionRef.doc(id).get();
      if (!doc.exists) {
        await subscribersCollectionRef.doc(id).set({
          name: user.name || "مستخدم جديد",
          email: user.email,
          picture: user.picture || "",
          firstLoginAt: now,
          lastLoginAt: now,
          isNew: true,
          customerNumber: Math.floor(1000 + Math.random() * 9000),
          subscriptions: [],
          notes: "",
          isBlocked: false,
          updatedAt: now
        });
      } else {
        await subscribersCollectionRef.doc(id).update({
          lastLoginAt: now,
          name: user.name || doc.data().name,
          picture: user.picture || doc.data().picture,
          updatedAt: now
        });
      }
    } catch (error) {
      console.error("Firebase Auth/Firestore Error:", error);
    }
  };

  const showUser = (user, credential) => {
    const id = `email_${encodeURIComponent(user.email.toLowerCase())}`;
    subscribersCollectionRef?.doc(id).get().then(doc => {
      if (doc.exists && doc.data().isBlocked) {
        alert("عذراً، تم حظر حسابك من دخول المتجر.");
        clearUser();
        location.reload();
        return;
      }
      if (userChip) userChip.removeAttribute("hidden");
      if (userAvatar) userAvatar.src = user.picture || "";
      if (userName) userName.textContent = user.name || "";
      if (userEmail) userEmail.textContent = user.email || "";
      updateAdminVisibility(user);
      closeAuthGate();
      if (credential) upsertUser(user, credential);
    }).catch(() => {
      if (userChip) userChip.removeAttribute("hidden");
      if (userAvatar) userAvatar.src = user.picture || "";
      if (userName) userName.textContent = user.name || "";
      if (userEmail) userEmail.textContent = user.email || "";
      updateAdminVisibility(user);
      closeAuthGate();
      if (credential) upsertUser(user, credential);
    });
  };

  const handleGoogleCredential = (response) => {
    const payload = decodeJwtPayload(response.credential);
    if (payload) {
      const user = { name: payload.name, email: payload.email, picture: payload.picture };
      saveUser(user);
      showUser(user, response.credential);
    }
  };

  const initGoogleAuth = () => {
    if (!window.google) return;
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredential
    });
    if (firebaseAuth) {
      firebaseAuth.onAuthStateChanged((authUser) => {
        if (authUser) {
          const saved = getSavedUser();
          if (saved && saved.email.toLowerCase() === authUser.email.toLowerCase()) {
            const id = `email_${encodeURIComponent(saved.email.toLowerCase())}`;
            subscribersCollectionRef?.doc(id).update({ lastLoginAt: new Date().toISOString() }).catch(()=>{});
          }
          if (isAdminEmail(authUser.email)) pullSubscribers();
        }
      });
    }
    const saved = getSavedUser();
    if (saved) showUser(saved);
    else {
      google.accounts.id.renderButton(gateGoogleSignIn, { theme: "outline", size: "large", shape: "pill" });
    }
  };

  const startWelcomeFlow = () => {
    if (!welcomeSplash) return;
    setTimeout(() => {
      welcomeSplash.classList.add("hide");
      setTimeout(() => {
        welcomeSplash.style.display = "none";
        welcomeSplash.setAttribute("hidden", "");
        if (!getSavedUser()) openAuthGate();
      }, 500);
    }, WELCOME_SPLASH_SHOW_MS);
  };

  // --- Click Event Handlers ---
  if (logoutBtn) logoutBtn.addEventListener("click", () => { clearUser(); firebaseAuth?.signOut(); location.reload(); });
  if (userMenuBtn) userMenuBtn.addEventListener("click", () => { userDropdown?.toggleAttribute("hidden"); });
  if (adminTopButton) adminTopButton.onclick = () => { adminPanel?.removeAttribute("hidden"); pullSubscribers(); };
  if (adminCloseBtn) adminCloseBtn.onclick = () => adminPanel?.setAttribute("hidden", "");

  // --- Backup & Restore ---
  const adminBackupBtn = document.getElementById("adminBackupBtn");
  const adminRestoreBtn = document.getElementById("adminRestoreBtn");
  const adminRestoreInput = document.getElementById("adminRestoreInput");

  if (adminBackupBtn) {
    adminBackupBtn.onclick = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(subscribersCache));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", `subscribers_backup_${getTodayDateKey()}.json`);
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    };
  }

  if (adminRestoreBtn) adminRestoreBtn.onclick = () => adminRestoreInput?.click();
  if (adminRestoreInput) {
    adminRestoreInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported)) {
            alert(`جاري استعادة ${imported.length} مستخدم...`);
            for (const sub of imported) {
              if (sub.id) {
                const id = sub.id;
                delete sub.id;
                await subscribersCollectionRef.doc(id).set(sub, { merge: true });
              }
            }
            alert("تمت الاستعادة بنجاح");
            pullSubscribers();
          }
        } catch (err) { alert("فشل استيراد الملف"); }
      };
      reader.readAsText(file);
    };
  }

  if (adminSearchInput) {
    adminSearchInput.oninput = (e) => {
      adminSearchValue = e.target.value.toLowerCase();
      renderAdminPanel();
    };
  }
  if (adminStatusFilter) {
    adminStatusFilter.onchange = (e) => {
      adminStatusValue = e.target.value;
      renderAdminPanel();
    };
  }

  const masterBody = document.getElementById("adminMasterBody");
  if (masterBody) {
    masterBody.addEventListener("click", (e) => {
      const tr = e.target.closest("tr");
      if (!tr) return;
      const id = tr.getAttribute("data-id");

      if (e.target.closest('button')?.dataset.action === "toggle-block") {
        const btn = e.target.closest('button');
        const isBlocked = !btn.classList.contains("btn-unblock");
        saveSubscriber(id, { isBlocked: isBlocked });
        return;
      }
      if (e.target.closest('button')?.classList.contains("add-sub-btn")) {
        const subsList = tr.querySelector(".subs-list");
        const today = getTodayDateKey();
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const nextMonthKey = nextMonth.toISOString().split('T')[0];
        subsList.insertAdjacentHTML('beforeend', `
          <div class="sub-row status-active" style="animation: rise 0.3s ease both;">
            <input type="text" class="sub-service" placeholder="اسم الخدمة (نتفليكس)" value="">
            <input type="date" class="sub-start" value="${today}">
            <input type="date" class="sub-end" value="${nextMonthKey}">
            <button class="btn-remove-sub" title="حذف الاشتراك"><i class="fa-solid fa-trash"></i></button>
          </div>
        `);
      }
      if (e.target.closest('.btn-remove-sub')) e.target.closest(".sub-row").remove();
      if (e.target.closest('button')?.classList.contains("save-sub")) {
        const btn = e.target.closest('button');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري الحفظ...';
        
        const subs = [];
        tr.querySelectorAll(".sub-row").forEach(row => {
          subs.push({
            service: row.querySelector(".sub-service").value,
            start: row.querySelector(".sub-start").value,
            end: row.querySelector(".sub-end").value
          });
        });
        // We ensure `saveSubscriber` doesn't block unexpectedly, we use then if it returns a promise.
        // Assuming saveSubscriber is async from earlier code:
        saveSubscriber(id, { subscriptions: subs, notes: tr.querySelector(".notes").value }).then(() => {
          btn.innerHTML = '<i class="fa-solid fa-check"></i> تم الحفظ';
          setTimeout(() => { btn.innerHTML = originalHTML; pullSubscribers(); }, 1000);
        }).catch(() => {
          btn.innerHTML = originalHTML;
        });
      } else if (e.target.closest('button')?.classList.contains("delete-sub")) {
        pendingDeleteSubscriberId = id;
        if(adminDeleteModal) adminDeleteModal.removeAttribute("hidden");
      }
    });
  }

  // Copy Badge Global Listener
  document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) {
          const text = copyBtn.getAttribute('data-copy');
          if (text) {
              navigator.clipboard.writeText(text).then(() => {
                  const original = copyBtn.innerHTML;
                  copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ!';
                  copyBtn.style.color = '#2ecc71';
                  copyBtn.style.borderColor = '#2ecc71';
                  setTimeout(() => {
                      copyBtn.innerHTML = original;
                      copyBtn.style.color = '';
                      copyBtn.style.borderColor = '';
                  }, 1500);
              });
          }
      }
  });

  

  if (adminDeleteConfirmBtn) adminDeleteConfirmBtn.onclick = () => deleteSubscriber(pendingDeleteSubscriberId);
  if (adminDeleteCancelBtn) adminDeleteCancelBtn.onclick = () => adminDeleteModal?.setAttribute("hidden", "");
  if (cartOpenBtn) cartOpenBtn.onclick = () => cartModal?.removeAttribute("hidden");
  if (cartCloseBtn) cartCloseBtn.onclick = () => cartModal?.setAttribute("hidden", "");
  if (cartClearBtn) cartClearBtn.onclick = () => { cartItemsCache = []; saveCart(); };
  if (cartCheckoutBtn) cartCheckoutBtn.onclick = checkoutCart;
  if (cartItemsBody) {
    cartItemsBody.onclick = (e) => {
      if (e.target.classList.contains("cart-remove")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        cartItemsCache.splice(index, 1);
        saveCart();
      }
    };
  }

  const bindAddToCart = () => {
    document.querySelectorAll(".quick-pick-order, .service-order").forEach(btn => {
      btn.textContent = "أضف للسلة";
      btn.onclick = (e) => {
        e.preventDefault();
        addToCart({
          service: btn.getAttribute("data-service") || btn.closest(".plan-group")?.getAttribute("data-service") || btn.closest(".service-item")?.getAttribute("data-service") || "اشتراك",
          duration: btn.getAttribute("data-duration") || "1 شهر",
          price: btn.getAttribute("data-price") || "8 دنانير"
        });
      };
    });
    document.querySelectorAll(".plan-card").forEach(card => {
      if (!card.querySelector(".add-to-cart-btn")) {
        const btn = document.createElement("button");
        btn.className = "btn btn-primary add-to-cart-btn";
        btn.textContent = "أضف للسلة";
        btn.style.marginTop = "10px";
        btn.style.width = "100%";
        btn.onclick = () => addToCart({
          service: card.closest(".plan-group")?.getAttribute("data-service") || card.closest(".service-item")?.getAttribute("data-service") || "اشتراك",
          duration: card.querySelector("h5")?.textContent || "1 شهر",
          price: card.querySelector(".plan-price strong")?.textContent || "0 دنانير"
        });
        card.appendChild(btn);
      }
    });
  };

  
  // --- Service Square Cards Slider ---
  document.addEventListener("click", e => {
    const sq = e.target.closest('.service-sq-card');
    if (sq) {
      const showcase = sq.closest('.services-showcase');
      showcase.querySelectorAll('.service-sq-card').forEach(c => c.classList.remove('active'));
      sq.classList.add('active');

      showcase.querySelectorAll('.plans-content').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
      });

      const targetId = sq.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
        targetContent.style.display = 'block';
      }
      
      sq.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });

  // --- Service Tab Switcher ---
  document.addEventListener("click", e => {
    const tab = e.target.closest('.service-tab');
    if (tab) {
      const container = tab.closest('.service-content');
      container.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      container.querySelectorAll('.plan-group').forEach(g => {
        g.style.display = 'none';
        g.classList.remove('active');
      });
      const targetGroup = container.querySelector('#' + tab.dataset.target);
      if (targetGroup) {
        targetGroup.style.display = 'grid';
        targetGroup.classList.add('active');
      }
    }
  });

  
  // --- Auto Scroll for Services Slider ---
  const slider = document.querySelector('.services-slider');
  if (slider) {
    let autoScrollInterval = setInterval(() => {
      // In RTL, scrolling left means decreasing scrollLeft or using scrollBy negative
      slider.scrollBy({ left: -1, behavior: 'auto' });
      
      // Loop back if reached end
      if (Math.abs(slider.scrollLeft) >= slider.scrollWidth - slider.clientWidth - 2) {
         slider.scrollTo({ left: 0, behavior: 'instant' });
      }
    }, 40);

    // Pause on hover or touch
    slider.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    slider.addEventListener('touchstart', () => clearInterval(autoScrollInterval));
    
    // Resume on leave
    const resumeScroll = () => {
      clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(() => {
        slider.scrollBy({ left: -1, behavior: 'auto' });
        if (Math.abs(slider.scrollLeft) >= slider.scrollWidth - slider.clientWidth - 2) {
           slider.scrollTo({ left: 0, behavior: 'instant' });
        }
      }, 40);
    };
    slider.addEventListener('mouseleave', resumeScroll);
    slider.addEventListener('touchend', resumeScroll);
  }

  loadCart();
  bindAddToCart();
  setTimeout(initGoogleAuth, 500);
  startWelcomeFlow();
});

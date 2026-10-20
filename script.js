/**
 * 20.10 Vietnamese Women's Day - Interactive Glowing Experience
 * Ultra-Smooth 120fps Hardware-Accelerated Animation Engine
 * Fast-Fading Rose Petals, High-Contrast Typography & Pure Single-Action Flow.
 */

// =============================================================================
// 1. DATA: PRE-LOADED VIETNAMESE QUOTES (Empowering & Non-Romantic)
// =============================================================================
const QUOTES_DATABASE = [
  // 10 Core User-Requested Quotes
  {
    text: "Phụ nữ giống như những đóa hoa, mỗi người đều mang một hương sắc riêng biệt. Hãy luôn tự tin nở rộ rực rỡ nhất theo cách của chính mình!",
    theme: "Tự Tin & Hương Sắc"
  },
  {
    text: "Dịu dàng không có nghĩa là yếu đuối. Bên trong sự mềm mại của người phụ nữ Việt Nam luôn ẩn chứa một sức mạnh phi thường có thể vượt qua mọi giông bão.",
    theme: "Sức Mạnh Dịu Dàng"
  },
  {
    text: "Chúc bạn không chỉ ngày 20/10 mà 365 ngày trong năm đều được yêu thương, trân trọng và sống cuộc đời rực rỡ như những vì sao.",
    theme: "365 Ngày Rực Rỡ"
  },
  {
    text: "Hãy cứ kiêu hãnh như một nữ hoàng, tự do như những cánh chim và ngọt ngào như nắng sớm. Thế giới này đẹp hơn rất nhiều vì có bạn!",
    theme: "Kiêu Hãnh & Tự Do"
  },
  {
    text: "Đừng bao giờ quên rằng giá trị của bạn không nằm ở ánh nhìn của người khác, mà nằm ở nụ cười tự tin và trái tim ấm áp của chính bạn.",
    theme: "Giá Trị Đích Thực"
  },
  {
    text: "Cảm ơn một nửa thế giới vì đã luôn kiên cường, bao dung và làm cho cuộc sống này trở nên dịu dàng, ý nghĩa hơn mỗi ngày.",
    theme: "Tri Ân & Bao Dung"
  },
  {
    text: "Phụ nữ hiện đại: Độc lập trong suy nghĩ, tự chủ trong cuộc sống và luôn biết cách yêu thương bản thân mình trước tiên.",
    theme: "Độc Lập & Tự Chủ"
  },
  {
    text: "Mỗi bước chân bạn đi đều để lại dấu ấn của sự duyên dáng và bản lĩnh. Hãy cứ theo đuổi đam mê, thành công và hạnh phúc luôn chờ đón bạn!",
    theme: "Bản Lĩnh Đam Mê"
  },
  {
    text: "Tuổi tác chỉ là những con số, còn khí chất và tâm hồn tươi trẻ mới là trang sức lộng lẫy nhất của người phụ nữ.",
    theme: "Khí Chất Vĩnh Cửu"
  },
  {
    text: "Chúc một nửa thế giới luôn giữ vững ngọn lửa nhiệt huyết trong tim, bình yên trong tâm hồn và rạng ngời hạnh phúc trên môi. Chúc mừng ngày 20/10!",
    theme: "Nhiệt Huyết & An Yên"
  },

  // Additional 15 Empowering Quotes
  {
    text: "Bản lĩnh của người phụ nữ không nằm ở việc chứng minh mình hơn ai, mà là không ngừng hoàn thiện để trở thành phiên bản tuyệt vời nhất của chính mình.",
    theme: "Hoàn Thiện Bản Thân"
  },
  {
    text: "Sự tự tin và tri thức chính là lớp trang sức rực rỡ nhất giúp người phụ nữ làm chủ cuộc đời và vững vàng trước mọi thử thách.",
    theme: "Tri Thức & Tự Tin"
  },
  {
    text: "Gửi tới những người phụ nữ luôn nỗ lực không ngừng nghỉ trong công việc, gia đình và cộng đồng: Sự kiên định của các bạn là nguồn cảm hứng vô giá.",
    theme: "Cống Hiến & Bản Lĩnh"
  },
  {
    text: "Hãy dũng cảm theo đuổi những hoài bão lớn lao. Giới hạn duy nhất của bạn là bầu trời, và bạn sinh ra để bay cao cùng đôi cánh tri thức.",
    theme: "Hoài Bão Bay Xa"
  },
  {
    text: "Vẻ đẹp đích thực bắt đầu từ khoảnh khắc bạn quyết định là chính mình: độc lập về tài chính, kiên định về lý tưởng và tự do trong tư duy.",
    theme: "Tự Do Tư Duy"
  },
  {
    text: "Một người phụ nữ có tư duy nhạy bén và tấm lòng nhân hậu có thể thắp sáng cả một chặng đường dài đầy chông gai cho chính mình và người khác.",
    theme: "Nhân Hậu & Trí Tuệ"
  },
  {
    text: "Chúc các chị em luôn tràn đầy năng lượng tích cực, sự kiên định trong sự nghiệp và một tâm thế ung dung, bình thản trước mọi đổi thay.",
    theme: "Năng Lượng Tích Cực"
  },
  {
    text: "Không cần trở thành bản sao của bất kỳ ai. Cá tính độc đáo, sự tử tế và tinh thần dám nghĩ dám làm chính là sức hút tuyệt vời nhất của bạn.",
    theme: "Cá Tính Độc Đáo"
  },
  {
    text: "Mỗi ngày mới là một trang sách trắng để bạn tự viết nên câu chuyện rực rỡ của cuộc đời mình. Hãy luôn tự hào về hành trình bạn đã đi qua!",
    theme: "Hành Trình Tự Hào"
  },
  {
    text: "Phụ nữ không chỉ nâng niu tổ ấm mà còn đang vững vàng dựng xây những giá trị to lớn cho xã hội. Trân trọng và khâm phục bản lĩnh của các bạn!",
    theme: "Xây Dựng Giá Trị"
  },
  {
    text: "Hãy nuôi dưỡng tâm hồn như chăm sóc một khu vườn xanh ngát. Tri thức, sự thấu hiểu và lòng bao dung là vẻ đẹp không bao giờ phai tàn theo năm tháng.",
    theme: "Tâm Hồn Tươi Sáng"
  },
  {
    text: "Chúc bạn luôn có đủ bản lĩnh để bước qua khó khăn, đủ bình yên để trân quý hiện tại và đủ niềm tin vững chắc để chạm tới mọi ước mơ.",
    theme: "Bản Lĩnh Vững Vàng"
  },
  {
    text: "Sức mạnh lớn nhất của người phụ nữ là khả năng chuyển hóa áp lực thành động lực, biến sự mềm mại thành sức mạnh nội tại lay chuyển thế giới.",
    theme: "Nội Lực Vượt Bậc"
  },
  {
    text: "Tự chủ tài chính, tự do tư tưởng và tự tại trong tâm hồn — đó là ba chiếc chìa khóa mở ra cánh cửa hạnh phúc đích thực của người phụ nữ thời đại mới.",
    theme: "Ba Chìa Khóa Hạnh Phúc"
  },
  {
    text: "Chúc mừng Ngày Phụ Nữ Việt Nam 20/10! Chúc bạn luôn giữ vững nụ cười rạng ngời, trái tim kiên định và ngọn lửa đam mê luôn bừng sáng trên mỗi nẻo đường.",
    theme: "Ngọn Lửa Đam Mê"
  }
];

// =============================================================================
// 2. WEB AUDIO SYNTHESIZER
// =============================================================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playChime(freq = 659.25, duration = 0.5, type = 'sine', gainVal = 0.1) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio fallback
    }
  }

  playMagicBloomChord() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.7, 'sine', 0.09);
      }, idx * 80);
    });
  }

  playSparkleBurst() {
    if (!this.enabled) return;
    const sparklePitches = [880, 1174.66, 1396.91, 1760];
    sparklePitches.forEach((freq, i) => {
      setTimeout(() => {
        this.playChime(freq, 0.28, 'triangle', 0.06);
      }, i * 45);
    });
  }
}

const audio = new SoundSynth();

// =============================================================================
// 3. BACKGROUND SPARSE FALLING HEARTS (Zero Lag, Fast Vector Render)
// =============================================================================
class FallingHeartsBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.hearts = [];
    this.targetCount = 16; // Sparse & clean
    
    this.colors = [
      { r: 255, g: 45,  b: 149 },
      { r: 255, g: 92,  b: 184 },
      { r: 255, g: 20,  b: 147 },
      { r: 255, g: 119, b: 188 }
    ];

    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 100));
    this.initHearts();
    this.animate();
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = Math.floor(this.width * this.dpr);
    this.canvas.height = Math.floor(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    if (this.hearts) {
      for (let i = 0; i < this.hearts.length; i++) {
        if (this.hearts[i].x > this.width) {
          this.hearts[i].x = Math.random() * this.width;
        }
      }
    }
  }

  createHeart(startY = null) {
    const size = 9 + Math.random() * 10;
    return {
      x: Math.random() * this.width,
      y: startY !== null ? startY : Math.random() * this.height,
      size: size,
      speedY: 0.5 + Math.random() * 0.6,
      swaySpeed: 0.015 + Math.random() * 0.018,
      swayAmp: 15 + Math.random() * 22,
      swayOffset: Math.random() * Math.PI * 2,
      rotation: (Math.random() - 0.5) * 0.3,
      rotationSpeed: (Math.random() - 0.5) * 0.006,
      opacity: 0.3 + Math.random() * 0.4,
      color: this.colors[Math.floor(Math.random() * this.colors.length)]
    };
  }

  initHearts() {
    this.hearts = [];
    for (let i = 0; i < this.targetCount; i++) {
      this.hearts.push(this.createHeart());
    }
  }

  drawHeartShape(ctx, x, y, size, rotation, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    const topCurveHeight = size * 0.3;

    // Fast Dual-Pass Glow
    ctx.beginPath();
    const haloSize = size * 1.3;
    const haloTop = haloSize * 0.3;
    ctx.moveTo(0, haloTop);
    ctx.bezierCurveTo(-haloSize / 2, -haloSize / 2, -haloSize, haloTop / 2, 0, haloSize);
    ctx.bezierCurveTo(haloSize, haloTop / 2, haloSize / 2, -haloSize / 2, 0, haloTop);
    ctx.closePath();
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.22})`;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, topCurveHeight / 2, 0, size);
    ctx.bezierCurveTo(size, topCurveHeight / 2, size / 2, -size / 2, 0, topCurveHeight);
    ctx.closePath();
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
    ctx.fill();

    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.hearts.length; i++) {
      const h = this.hearts[i];
      h.y += h.speedY;
      h.swayOffset += h.swaySpeed;
      h.rotation += h.rotationSpeed;
      const currentX = h.x + Math.sin(h.swayOffset) * h.swayAmp;
      const currentOpacity = h.opacity * (0.85 + 0.15 * Math.sin(h.swayOffset * 1.5));

      this.drawHeartShape(this.ctx, currentX, h.y, h.size, h.rotation, h.color, currentOpacity);

      if (h.y > this.height + 25) {
        this.hearts[i] = this.createHeart(-20);
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// =============================================================================
// 4. FOREGROUND PETAL SPLIT CANVAS (Ultra-Fast Fade Out & Sleep When Idle)
// =============================================================================
class ForegroundParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.particles = [];
    this.petals = [];
    this.isRunning = false;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 100));
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = Math.floor(this.width * this.dpr);
    this.canvas.height = Math.floor(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  startLoop() {
    if (!this.isRunning) {
      this.isRunning = true;
      requestAnimationFrame(() => this.animate());
    }
  }

  // Fast-Dispersing Rose Petals (Fades out quickly within ~0.9s - 1.2s)
  burstRosePetals(originX, originY) {
    const petalCount = 32;
    const petalGradients = [
      { start: '#FFFFFF', mid: '#FF5CB8', end: '#FF1493' },
      { start: '#FFF0F7', mid: '#FF2D95', end: '#B5179E' },
      { start: '#FFFFFF', mid: '#FF77BC', end: '#FF2D95' }
    ];

    for (let i = 0; i < petalCount; i++) {
      const angle = (Math.PI * 2 * i) / petalCount + (Math.random() - 0.5) * 0.4;
      const initialSpeed = 6 + Math.random() * 9;
      const size = 14 + Math.random() * 12;

      this.petals.push({
        x: originX + (Math.random() - 0.5) * 20,
        y: originY + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * initialSpeed,
        vy: Math.sin(angle) * initialSpeed - 3,
        drag: 0.91, // Fast aerodynamic deceleration
        gravity: 0.14,
        windFactor: 0.6 + Math.random() * 0.5,
        size: size,
        flipAngle: Math.random() * Math.PI,
        flipSpeed: 0.05 + Math.random() * 0.05,
        rotAngle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.06,
        opacity: 1,
        // FAST FADE: disappears cleanly within ~1s
        fadeSpeed: 0.024 + Math.random() * 0.018,
        colors: petalGradients[Math.floor(Math.random() * petalGradients.length)]
      });
    }

    this.burstSparkles(originX, originY, 20, '#FF5CB8');
    this.startLoop();
  }

  burstSparkles(x, y, count = 20, tint = '#FF5CB8') {
    const colors = ['#FFFFFF', '#FF5CB8', '#FF2D95', '#FFF0F7'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 7;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 3 + Math.random() * 4,
        opacity: 1,
        decay: 0.035 + Math.random() * 0.035, // Fast sparkle fade
        color: colors[Math.floor(Math.random() * colors.length)],
        isStar: Math.random() > 0.4
      });
    }
    this.startLoop();
  }

  drawPetal(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotAngle);
    ctx.scale(Math.cos(p.flipAngle), 1);

    ctx.beginPath();
    const w = p.size * 0.75;
    const h = p.size;
    ctx.moveTo(0, -h * 0.6);
    ctx.bezierCurveTo(w, -h * 0.6, w * 1.2, h * 0.3, 0, h * 0.65);
    ctx.bezierCurveTo(-w * 1.2, h * 0.3, -w, -h * 0.6, 0, -h * 0.6);
    ctx.closePath();

    const grad = ctx.createRadialGradient(0, -h * 0.1, 1, 0, 0, h);
    grad.addColorStop(0, p.colors.start);
    grad.addColorStop(0.45, p.colors.mid);
    grad.addColorStop(1, p.colors.end);

    ctx.fillStyle = grad;
    ctx.globalAlpha = Math.max(0, p.opacity);
    ctx.fill();

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 0.8;
    ctx.stroke();

    ctx.restore();
  }

  drawStar(ctx, s) {
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.fillStyle = s.color;
    ctx.globalAlpha = Math.max(0, s.opacity);

    ctx.beginPath();
    const r = s.size;
    for (let i = 0; i < 4; i++) {
      ctx.lineTo(Math.cos((i * Math.PI) / 2) * r, Math.sin((i * Math.PI) / 2) * r);
      ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.32), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.32));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const time = Date.now() * 0.0016;
    const breeze = Math.sin(time) * 0.7;

    for (let i = this.petals.length - 1; i >= 0; i--) {
      const p = this.petals[i];
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.x += p.vx + breeze * p.windFactor;
      p.y += p.vy;

      p.flipAngle += p.flipSpeed;
      p.rotAngle += p.rotSpeed;
      p.opacity -= p.fadeSpeed;

      if (p.opacity <= 0.01 || p.y > this.height + 40) {
        this.petals.splice(i, 1);
        continue;
      }

      this.drawPetal(this.ctx, p);
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const part = this.particles[i];
      part.x += part.vx;
      part.y += part.vy;
      part.vy += 0.06;
      part.opacity -= part.decay;

      if (part.opacity <= 0.01) {
        this.particles.splice(i, 1);
        continue;
      }

      if (part.isStar) {
        this.drawStar(this.ctx, part);
      } else {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(part.x, part.y, part.size * 0.5, 0, Math.PI * 2);
        this.ctx.fillStyle = part.color;
        this.ctx.globalAlpha = Math.max(0, part.opacity);
        this.ctx.fill();
        this.ctx.restore();
      }
    }

    if (this.petals.length > 0 || this.particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.isRunning = false;
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }
}

// =============================================================================
// 5. CORE CONTROLLER: ENVELOPE, ROSE BLOOMING, LETTER & QUOTES
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const heartsBackground = new FallingHeartsBackground('hearts-canvas');
  const particleEngine = new ForegroundParticleCanvas('burst-canvas');

  // DOM Elements - Centerpiece
  const envelopeScene = document.getElementById('envelope-scene');
  const envelopeBox = document.getElementById('envelope-box');
  const roseWrapper = document.getElementById('rose-wrapper');
  const letterCard = document.getElementById('letter-card');
  const closeLetterBtn = document.getElementById('close-letter-btn');

  // DOM Elements - Quote Generator
  const magicQuoteBtn = document.getElementById('magic-quote-btn');
  const quoteText = document.getElementById('quote-text');
  const quoteCategory = document.getElementById('quote-category');

  // DOM Elements - Top Bar & Sound
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  const soundLabel = document.getElementById('sound-label');

  // State
  let isEnvelopeOpen = false;
  let isAnimationRunning = false;
  let lastQuoteIndex = 0;

  // Sound Toggle Handler
  soundToggleBtn.addEventListener('click', () => {
    const isNowEnabled = audio.toggle();
    if (isNowEnabled) {
      soundIcon.textContent = '🔔';
      soundLabel.textContent = 'Âm thanh: Bật';
      audio.playChime(880, 0.3);
    } else {
      soundIcon.textContent = '🔕';
      soundLabel.textContent = 'Âm thanh: Tắt';
    }
  });

  // Snappy Envelope Sequence
  function openEnvelopeSequence() {
    if (isEnvelopeOpen || isAnimationRunning) return;
    isEnvelopeOpen = true;
    isAnimationRunning = true;

    envelopeBox.setAttribute('aria-expanded', 'true');
    envelopeBox.classList.add('is-open');
    audio.playChime(659.25, 0.5);

    // Step 1: Rose rises
    setTimeout(() => {
      roseWrapper.classList.remove('dispersed');
      roseWrapper.classList.add('rising');
      audio.playMagicBloomChord();
    }, 350);

    // Step 2: Rose Petals bloom open
    setTimeout(() => {
      roseWrapper.classList.add('blooming');
    }, 850);

    // Step 3: Rose splits into fast-fading glowing petals
    setTimeout(() => {
      const roseRect = roseWrapper.getBoundingClientRect();
      const originX = roseRect.left + roseRect.width / 2;
      const originY = roseRect.top + roseRect.height * 0.35;

      roseWrapper.classList.add('dispersed');
      particleEngine.burstRosePetals(originX, originY);
      audio.playSparkleBurst();
    }, 2000);

    // Step 4: High-contrast white frosted letter smoothly displays
    setTimeout(() => {
      letterCard.classList.remove('hidden');
      void letterCard.offsetWidth;
      letterCard.classList.add('visible');
      envelopeScene.classList.add('fade-down');
      isAnimationRunning = false;
    }, 2450);
  }

  envelopeBox.addEventListener('click', () => {
    openEnvelopeSequence();
  });

  envelopeBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelopeSequence();
    }
  });

  // Single Action Button: Close Letter & Return to Envelope
  closeLetterBtn.addEventListener('click', () => {
    if (isAnimationRunning) return;
    letterCard.classList.remove('visible');
    setTimeout(() => {
      letterCard.classList.add('hidden');
      envelopeScene.classList.remove('fade-down');
      envelopeBox.classList.remove('is-open');
      envelopeBox.setAttribute('aria-expanded', 'false');
      roseWrapper.classList.remove('rising', 'blooming', 'dispersed');
      isEnvelopeOpen = false;
      audio.playChime(523.25, 0.25);
    }, 260);
  });

  // Quote Generator (Simplified: Theme Title Only, No Index, No Copy)
  function displayQuote(index) {
    const quote = QUOTES_DATABASE[index];
    quoteText.classList.add('is-switching');

    setTimeout(() => {
      quoteText.textContent = quote.text;
      quoteCategory.textContent = quote.theme; // Directly e.g. "Nội Lực Vượt Bậc"
      quoteText.classList.remove('is-switching');
    }, 120);
  }

  function generateRandomQuote(triggerElement) {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * QUOTES_DATABASE.length);
    } while (nextIndex === lastQuoteIndex && QUOTES_DATABASE.length > 1);

    lastQuoteIndex = nextIndex;
    displayQuote(nextIndex);

    if (triggerElement) {
      const rect = triggerElement.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;
      particleEngine.burstSparkles(originX, originY, 20, '#FF5CB8');
    }
    audio.playSparkleBurst();
  }

  magicQuoteBtn.addEventListener('click', () => {
    generateRandomQuote(magicQuoteBtn);
  });

  // Initialize first quote
  displayQuote(0);
});

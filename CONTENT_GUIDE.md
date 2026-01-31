# ✍️ Daily Dev Life - Content Writing Guide

## 🎯 Phong cách viết

### Tông giọng: Personal + Technical
- Viết như đang kể chuyện với bạn qua cà phê
- Xen kẽ cảm xúc cá nhân với kiến thức kỹ thuật
- Chân thật, không cần hoàn hảo
- Humor nhẹ nhàng, gần gũi

### Đặc điểm:
- ✅ Bắt đầu bằng moment đời thường
- ✅ Kết thúc bằng suy ngẫm nhẹ nhàng
- ✅ Code examples thực tế
- ✅ Lessons learned từ trải nghiệm
- ❌ Tránh quá academic
- ❌ Không flex công nghệ
- ❌ Không copy-paste documentation

---

## 📝 Template bài viết

### Front Matter (Metadata)
```markdown
---
title: "Coding at 2AM: Khi bug trở thành bạn đồng hành"
emoji: "☕"
heroImage: "/images/laptop-midnight.jpg"
imageCaption: "Laptop lúc 2h sáng, ly cà phê thứ 3 đã nguội"
mood: "deadline-night"
category: "Dev Life"
tags: ["debugging", "late-night-coding", "coffee"]
date: 2026-01-07
excerpt: "Đêm qua mình ngồi đến 2h sáng fix bug. Ly cà phê thứ 3 vẫn còn nóng, nhưng đầu mình thì đã nguội lạnh..."
author: "Lynn"
---
```

### Cấu trúc bài viết

#### 1. Opening - Life Moment (Mở đầu)
**Format:** Lát cắt đời thường, cảm xúc ngay lập tức

**Ví dụ:**
```markdown
## ☕ 6h chiều, ly cà phê đầu tiên

Chiều thứ 6, deadline 9h sáng thứ 2. Mình pha ly cà phê đầu tiên của buổi tối, 
nhìn màn hình laptop với cái TODO list dài như sợi mì Ý.

"15 tiếng nữa. Được mà." - mình nghĩ vậy.

Spoiler: không được đâu bro.
```

#### 2. The Story (Câu chuyện chính)
**Format:** Kể lại journey, xen kẽ tech + emotion

**Ví dụ:**
```markdown
## 🐛 Bug xuất hiện lúc 10h tối

Feature hoàn thành xong 9h tối. Mình vui vẻ test thử, và thế là...

```javascript
Uncaught TypeError: Cannot read property 'map' of undefined
```

Classic. Lỗi kinh điển developer nào cũng gặp ít nhất 1000 lần.

Lúc này ly cà phê thứ 2 đã hết. Mình pha thêm, nghĩ "nhanh thôi, 30 phút fix xong."

Narrator: "It was not 30 minutes."

### 🔍 The Journey

console.log() là bạn thân nhất lúc này:

```javascript
console.log('data:', data); // undefined
console.log('props:', props); // ???
console.log('WHY GOD WHY'); // desperation level: 100
```

Turns out, API response của backend đổi structure mà không báo. 
Trước kia `data.items[]`, giờ thành `data.result.items[]`.

**Cảm xúc lúc này:** 
- 30% tức
- 40% mệt
- 30% muốn cười vào bản thân vì sao không check API docs

**Bài học:**
Always check API documentation. Luôn luôn. LUÔN LUÔN.
```

#### 3. The Fix (Giải pháp)
**Format:** Code + explanation + why it works

**Ví dụ:**
```markdown
## ✅ Fix trong 5 phút, đau đầu 3 tiếng

```javascript
// Before (lỗi)
const items = data.items.map(item => ...)

// After (works)
const items = data?.result?.items?.map(item => ...) ?? []
```

Optional chaining + nullish coalescing. 
Hai thứ giúp developer ngủ ngon hơn.

**Giải thích:**
- `?.` - check null/undefined trước khi access
- `??` - fallback về empty array nếu undefined

Đơn giản, nhưng powerful.
```

#### 4. Life Reflection (Kết - suy ngẫm)
**Format:** Lesson learned + personal takeaway

**Ví dụ:**
```markdown
## 🌙 2h30 sáng, bug fix xong

Ly cà phê thứ 3 đã nguội lạnh.  
Deadline vẫn còn 6 tiếng.  
Mình có thể ngủ được 4 tiếng.

**Bài học hôm nay:**
1. Check API docs trước khi code
2. Optional chaining là must-have
3. Cà phê nguội vẫn uống được (nhưng không ngon)

Deploy xong, mình tắt laptop, nhìn trời Sài Gòn đã sáng mờ mờ. 
Nghề dev vất vả, nhưng lúc fix được bug, feeling đó... priceless.

Good night (technically good morning) 🌅
```

---

## 🎨 Mood Tags - Khi nào dùng gì

### ☕ coffee-morning
**Dùng cho:**
- Bài viết về routine buổi sáng
- New day, new code
- Fresh start, clean slate
- Morning productivity tips

**Ví dụ title:**
- "6AM Coffee: Khi đầu óc còn clear nhất"
- "Morning Coding: 2 tiếng vàng của dev"

### 🌙 deadline-night
**Dùng cho:**
- Late night coding
- Deadline stress
- All-nighter stories
- Pressure moments

**Ví dụ title:**
- "Coding to 2AM: Survival guide"
- "Deadline trong 6 tiếng: Panic mode ON"

### 🚀 deploy-success
**Dùng cho:**
- Feature launch
- Deploy celebrations
- Success stories
- Project completion

**Ví dụ title:**
- "Deploy thành công: Feeling top of the world"
- "Feature đi live: 3 tháng dev trong 1 click"

### 🐛 bug-headache
**Dùng cho:**
- Debugging stories
- Bug hunting journey
- Frustration → Solution
- Technical challenges

**Ví dụ title:**
- "Bug kỳ lạ nhất tháng này"
- "3 tiếng debug: A journey into madness"

---

## 📸 Hero Image Guidelines

### Ý tưởng ảnh:
- ☕ Tay cầm ly cà phê + laptop
- 💻 Màn hình code lúc đêm khuya
- 🚶 Đi dạo phố (thinking time)
- 🌸 Góc ban công với cây cối
- 🌆 View thành phố từ cafe
- 📱 Setup workspace
- 🌅 Sunrise/sunset coding moment

### Chất lượng:
- Real photos > Stock photos
- Candid > Posed
- Everyday > Professional
- Warm colors > Cold colors

### Caption luôn có:
```
Laptop lúc 2h sáng, ly cà phê thứ 3
```

---

## 💡 Writing Tips

### DO's:
- ✅ Bắt đầu với specific moment
- ✅ Dùng "mình" thay vì "tôi" (casual)
- ✅ Code examples thật, đã chạy được
- ✅ Admit mistakes & lessons
- ✅ End với takeaway nhẹ nhàng

### DON'Ts:
- ❌ Technical jargon quá nhiều
- ❌ Flex về skills
- ❌ Copy documentation
- ❌ Quá dài (ideal: 800-1500 words)
- ❌ Không có cảm xúc

---

## 🎯 SEO-Friendly Structure

```markdown
# Main Title (H1) - có keyword + emotion
## Section (H2) - clear, actionable
### Subsection (H3) - specific points
```

**Example:**
```
# Coding at 2AM: Debug như thế nào cho hiệu quả
## 🐛 Tại sao bug lại xuất hiện đêm khuya?
### The Psychology of Late Night Coding
### Tools giúp debug nhanh hơn
## ✅ 5 Steps to Debug hiệu quả
### 1. Reproduce the bug
### 2. Isolate the problem
...
```

---

## 📊 Checklist trước khi publish

### Content:
- [ ] Title hấp dẫn + có emoji
- [ ] Excerpt ngắn gọn (2-3 câu)
- [ ] Opening life moment
- [ ] Technical content valuable
- [ ] Code examples có thật
- [ ] Kết với reflection
- [ ] Grammar check (Grammarly)
- [ ] Link đến bài liên quan

### Media:
- [ ] Hero image đẹp, relevant
- [ ] Image caption có
- [ ] Alt text cho accessibility
- [ ] Image optimized (<500KB)

### Metadata:
- [ ] Mood tag chính xác
- [ ] Category phù hợp
- [ ] 3-5 tags relevant
- [ ] Date correct
- [ ] Author info

### SEO:
- [ ] URL slug clean
- [ ] Meta description
- [ ] H1, H2, H3 structure
- [ ] Internal links
- [ ] External links (nếu có)

---

## 🌟 Example Posts (Reference)

### Post 1: Morning Routine
```markdown
---
title: "☕ 6AM Code: Khi đầu óc còn fresh nhất"
mood: "coffee-morning"
---

Chuông báo thức 5h45. Mình dậy, pha cà phê, mở laptop.

Không phải vì deadline. Không phải vì stress. 
Chỉ đơn giản vì 2 tiếng sáng sớm này, đầu óc clear nhất.

...
```

### Post 2: Debugging Story
```markdown
---
title: "🐛 Bug React khiến mình đau đầu 3 ngày"
mood: "bug-headache"
---

Ngày 1: "Bug nhỏ thôi, chiều fix xong."
Ngày 2: "Sao lại re-render vô hạn?"
Ngày 3: "useEffect dependency array... OH."

...
```

### Post 3: Deploy Success
```markdown
---
title: "🚀 Deploy lên production: 3 tháng trong 1 click"
mood: "deploy-success"
---

Tay run run hover trên nút "Deploy to Production".

3 tháng code. 200+ commits. Vô số ly cà phê.

Click.

...
```

---

## 📱 Social Media Snippets

Mỗi bài viết nên có snippets để share:

**Twitter/X:**
```
🐛 Đêm qua debug đến 2h sáng.

Turns out: Lỗi do API đổi structure mà không báo.

Bài học: Always check API docs.

Full story: [link]

#DevLife #Debugging #Coffee
```

**LinkedIn:**
```
💭 Reflection sau 1 đêm debug:

Optional chaining (?.) và nullish coalescing (??) là 2 features giúp developer ngủ ngon hơn.

Bài viết đầy đủ về câu chuyện debug đêm qua, và lessons learned:
[link]

#WebDevelopment #JavaScript #CodingLife
```

---

**Happy writing! ✍️☕**

Remember: Viết về những gì bạn trải nghiệm. Authenticity > Perfection.

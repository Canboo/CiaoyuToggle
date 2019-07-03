Ciaoyu Toggle
=====
一個簡易切換元素顯示與否的函式。取名為 Ciaoyu Toggle 以表達我對女兒-蕎羽的思念與回憶。</br>
A simple function for toggle element visible. Dedicated to my daughter Ciao-Yu.


## 範例 Demo
Demo on [https://canboo.github.io/CiaoyuToggle/](https://canboo.github.io/CiaoyuToggle/).


## 引用 Quick start

引用 `jQuery` 及 ciaoyuToggle.js 置於 `</body>` 前
``` html
...
<script src="jquery-3.4.1.min.js"></script>
<script src="ciaoyuToggle.min.js?v=1.2.1"></script>
</body>
```


## 使用方式 Usage
> 觸發效果的元素請給予 `data-ciaoyu="toggle"`</br>
> 動態顯示的元素 `data-ciaoyu-toggle="對應的物件ID"` 屬性

### radio / checkbox 範例 Example
要觸發效果的標籤 `<input type="checkbox">` 或 `<input type="radio">` 給予 `id` 屬性，以及 `data-ciaoyu="toggle"` 屬性
``` html
<input data-ciaoyu="toggle" type="checkbox" id="somethingA">
<input data-ciaoyu="toggle" type="radio" id="somethingB">
```

給予要動態顯示的元素 `data-ciaoyu-toggle` 屬性，值請填入要對應的物件 ID
``` html
<div data-ciaoyu-toggle="somethingA">...</div>
<div data-ciaoyu-toggle="somethingB">...</div>
```

### select 範例 Example
> 動態顯示的元素除了 `data-ciaoyu-toggle` 屬性還需要 `data-ciaoyu-val` 屬性

要觸發效果的標籤 `<select>` 給予 `id` 屬性，以及 `data-ciaoyu="toggle"` 屬性
``` html
<select data-ciaoyu="toggle" id="somethingC">
<option value="1">1</option>
...
</select>
```

給予要動態顯示的元素 `data-ciaoyu-toggle` 屬性，值請填入要對應的物件 ID
請額外再給予 `data-ciaoyu-val` 屬性，值請填入對應的選項值
``` html
<div data-ciaoyu-toggle="somethingC" data-ciaoyu-val="1">...</div>
```

### 呼叫函式觸發 Via Javascript
在場景下如果需要自行定義綁定，請使用 `ciaoyuToggle()` 函式
```js
$('.selector').ciaoyuToggle();
```


## 說明 Documentation

#### 單一
> 在 `id="something"` 的元素被選取時顯示
``` html
<div data-ciaoyu-toggle="something">...</div>
```

#### 複數 (使用 `,`)
> 在 `id="something1"` 或 `id="something2"` 的元素被選取時顯示
``` html
<div data-ciaoyu-toggle="something1,something2">...</div>
```

#### 同時成立 (使用 `+`)
> 在 `id="something1"` 及 `id="something2"` 的元素被選取時顯示
``` html
<div data-ciaoyu-toggle="something1+something2">...</div>
```

#### 對應下拉 (需增加 `data-ciaoyu-val` 屬性，可使用複數 `,`)
> 在 `id="something1"` 的元素選取特定值 1 時顯示
``` html
<div data-ciaoyu-toggle="something1" data-ciaoyu-val="1">...</div>
<div data-ciaoyu-toggle="something1" data-ciaoyu-val="1,2,3">...</div>
```
> 在 `id="something1"` 的元素選取特定值不是 0 時顯示 (使用 `!` 符號，`data-ciaoyu-val` 屬性不可複數)
``` html
<div data-ciaoyu-toggle="something1" data-ciaoyu-val="!0">...</div>
```


## 備註 Memo
因為包含 `data-ciaoyu-toggle` 的物件預設不是隱藏，由 Ciao Toggle 在頁面 Render 後才隱藏的話可能會造成畫面閃動，所以建議透過 CSS 先將物件隱藏
``` CSS
[data-ciaoyu-toggle] {
    display: none;
}
```
prevent display data-ciaoyu-toggle element on render page.

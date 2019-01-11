Ciao Toggle
=====
一個簡易切換元素顯示與否的函式。取名為 Ciao Toggle 以表達我對女兒-蕎羽的思念與回憶。

A simple function for toggle element visible. Dedicated to my daughter Ciao-Yu.


## 範例 Demo
Demo on [https://canboo.github.io/CiaoToggle/](https://canboo.github.io/CiaoToggle/).


## 引用 Quick start

引用 ciaoToggle.js 置於 `</body>` 前
``` html
...
<script src="ciaoToggle.js"></script>
</body>
```


## 使用方式 Usage
> 觸發效果的元素請給予 `class="ciao-toggle"`
> 動態顯示的元素 `data-ciao-toggle="對應的物件ID"` 屬性

#### radio / checkbox 範例 Example
要觸發效果的標籤 `<input type="checkbox">` 或 `<input type="radio">` 給予 `id` 屬性，以及 `class` 屬性給於 `ciao-toggle` 類別
``` html
<input class="ciao-toggle" type="checkbox" id="somethingA">
<input class="ciao-toggle" type="radio" id="somethingB">
```

給予要動態顯示的元素 `data-ciao-toggle` 屬性，值請填入要對應的物件 ID
``` html
<div data-ciao-toggle="somethingA">...</div>
<div data-ciao-toggle="somethingB">...</div>
```

#### select 範例 Example
> 動態顯示的元素除了 `data-ciao-toggle` 屬性還需要 `data-ciao-val` 屬性

要觸發效果的標籤 `<select>` 給予 `id` 屬性，以及 `class` 屬性給於 `ciao-toggle` 類別
``` html
<select class="ciao-toggle" id="somethingC">
<option value="1">1</option>
...
</select>
```

給予要動態顯示的元素 `data-ciao-toggle` 屬性，值請填入要對應的物件 ID，請額外再給予 `data-ciao-val` 屬性，值請填入對應的選項值
``` html
<div data-ciao-toggle="somethingC" data-ciao-val="1">...</div>
```

#### 呼叫函式觸發 Via Javascript
在場景下如果需要自行定義綁定，請使用 `ciaoToggle()` 函式
```js
$('.selector').ciaoToggle();
```


## 說明 Documentation

#### 單一
> 在 `id="something"` 的元素被選取時顯示
``` html
<div data-ciao-toggle="something">...</div>
```

#### 複數 (使用 `,`)
> 在 `id="something1"` 或 `id="something2"` 的元素被選取時顯示
``` html
<div data-ciao-toggle="something1,something2">...</div>
```

#### 同時成立 (使用 `+`)
> 在 `id="something1"` 及 `id="something2"` 的元素被選取時顯示
``` html
<div data-ciao-toggle="something1+something2">...</div>
```

#### 對應下拉 (需增加 `data-ciao-val` 屬性，可使用複數 `,`)
> 在 `id="something1"` 的元素選取特定值 1 時顯示
``` html
<div data-ciao-toggle="something1" data-ciao-val="1">...</div>
<div data-ciao-toggle="something1" data-ciao-val="1,2,3">...</div>
```
> 在 `id="something1"` 的元素選取特定值不是 0 時顯示 (使用 `!` 符號，`data-ciao-val` 屬性不可複數)
``` html
<div data-ciao-toggle="something1" data-ciao-val="!0">...</div>
```


## 備註 Memo
因為包含 `data-ciao-toggle` 的物件預設不是隱藏，由 Ciao Toggle 在頁面 Render 後才隱藏的話可能會造成畫面閃動，所以建議透過 CSS 先將物件隱藏
``` CSS
[data-ciao-toggle] {
    display: none;
}
```
prevent display data-ciao-toggle element on render page.

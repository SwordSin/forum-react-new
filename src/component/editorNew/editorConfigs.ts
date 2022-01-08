import { InlintStyleType } from "@/typings/shims"

export interface inlineTypeEditor {
    label: string;
    style: InlintStyleType;
    jsxName: string;
    type: string;
    inline: boolean
}

// { label: '加粗', style: 'BOLD' },
// { label: '倾斜', style: 'ITALIC' },
// { label: '下划线', style: 'UNDERLINE' },
// { label: '删除线', style: 'STRIKETHROUGH' },
// 富文本的行内样式
export const inlineTypes: inlineTypeEditor[] = [
    { label: '加粗', type: 'BOLD', jsxName: 'BoldOutlined',  style: {}, inline: true },
    { label: '倾斜', type: 'ITALIC', jsxName: 'ItalicOutlined',  style: {}, inline: true },
    { label: '下划线', type: 'UNDERLINE', jsxName: 'UnderlineOutlined',  style: {}, inline: true },
    { label: '删除线', type: 'STRIKETHROUGH', jsxName: 'StrikethroughOutlined',  style: {}, inline: true }
    // { label: '标题', type: 'header-four', jsxName: 'FontSizeOutlined',  style: {}, inline: false }
]


// 块样式
export const blockTypes:inlineTypeEditor[] = [
    // { label: '普通', style: 'unstyled' },
    // { label: 'h1', style: 'header-one' },
    // { label: 'h2', style: 'header-two' },
    // { label: 'h3', style: 'header-three' },
    // { label: '标题', type: 'header-four' }
    // { label: 'h5', style: 'header-five' },
    // { label: 'h6', style: 'header-six' },
    // { label: '引用', style: 'blockquote' },
    // { label: '代码', style: 'code-block' },
    // { label: 'atomic', style: 'atomic' },这个有问题
    // { label: '有序列表', style: 'ordered-list-item' },
    // { label: '无序列表', style: 'unordered-list-item' },
]



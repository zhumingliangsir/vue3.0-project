export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150"
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧"
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 5,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150"
  },
  {
    id: 6,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 7,
    title: "test3的专栏",
    description: "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧"
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 8,
    title: "test4的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  }
];

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: "这是我的第一篇文章",
    content:
      "我们在未知的荒原上艰难行走,流着坚强的泪水放荡并且迷惘,我们在纷乱的街道上失声歌唱,唱着那美丽而不如人意的生命",
    image:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110",
    createdAt: "2020-06-11 10:34:22",
    columnId: 1
  },
  {
    id: 2,
    title: "这是我的第二篇文章",
    content:
      "当灰烬bai查封了凝霜du的屋檐,当车菊草化作深秋的露水,我用固执的枯藤做成行囊,走向了那布满荆棘的他乡,当大地铺满了悲泣的落叶,当杜鹃花化作远空的雾霭,祝福我吧我最思念的亲人,那就是我向你告别的身影,也许迷途的惆怅会扯碎我的脚步,可我相信未来会给我一双梦想的翅膀,虽然挫折的创伤让我寸步难行",
    createdAt: "2020-06-11 10:34:22",
    columnId: 1
  },
  {
    id: 3,
    title: "这是我的第三篇文章",
    content:
      "当灰烬bai查封了凝霜du的屋檐,当车菊草化作深秋的露水,我用固执的枯藤做成行囊,走向了那布满荆棘的他乡,当大地铺满了悲泣的落叶,当杜鹃花化作远空的雾霭,祝福我吧我最思念的亲人,那就是我向你告别的身影,也许迷途的惆怅会扯碎我的脚步,可我相信未来会给我一双梦想的翅膀,虽然挫折的创伤让我寸步难行",
    image:
      "https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110",
    createdAt: "2020-06-11 10:34:22",
    columnId: 1
  },
  {
    id: 4,
    title: "这是我的第一篇文章",
    content:
      "当灰烬bai查封了凝霜du的屋檐,当车菊草化作深秋的露水,我用固执的枯藤做成行囊,走向了那布满荆棘的他乡,当大地铺满了悲泣的落叶,当杜鹃花化作远空的雾霭,祝福我吧我最思念的亲人,那就是我向你告别的身影,也许迷途的惆怅会扯碎我的脚步,可我相信未来会给我一双梦想的翅膀,虽然挫折的创伤让我寸步难行",
    image:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110",
    createdAt: "2020-06-11 10:34:22",
    columnId: 2
  },
  {
    id: 5,
    title: "这是我的第二篇文章",
    content:
      "当灰烬bai查封了凝霜du的屋檐,当车菊草化作深秋的露水,我用固执的枯藤做成行囊,走向了那布满荆棘的他乡,当大地铺满了悲泣的落叶,当杜鹃花化作远空的雾霭,祝福我吧我最思念的亲人,那就是我向你告别的身影,也许迷途的惆怅会扯碎我的脚步,可我相信未来会给我一双梦想的翅膀,虽然挫折的创伤让我寸步难行",
    createdAt: "2020-06-11 10:34:22",
    columnId: 2
  },
  {
    id: 6,
    title: "这是我的第三篇文章",
    content:
      "当灰烬bai查封了凝霜du的屋檐,当车菊草化作深秋的露水,我用固执的枯藤做成行囊,走向了那布满荆棘的他乡,当大地铺满了悲泣的落叶,当杜鹃花化作远空的雾霭,祝福我吧我最思念的亲人,那就是我向你告别的身影,也许迷途的惆怅会扯碎我的脚步,可我相信未来会给我一双梦想的翅膀,虽然挫折的创伤让我寸步难行",
    image:
      "https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110",
    createdAt: "2020-06-11 10:34:22",
    columnId: 2
  }
];

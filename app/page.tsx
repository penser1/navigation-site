import React from "react";

const categories = [
  {
    category: "搜索",
    links: [
      { name: "Google", url: "https://www.google.com" },
      { name: "百度", url: "https://www.baidu.com" },
    ],
  },
  {
    category: "购物",
    links: [
      { name: "淘宝", url: "https://www.taobao.com" },
      { name: "京东", url: "https://www.jd.com" },
      { name: "亚马逊", url: "https://www.amazon.com" },
    ],
  },
  {
    category: "视频",
    links: [
      { name: "YouTube", url: "https://www.youtube.com" },
      { name: "哔哩哔哩", url: "https://www.bilibili.com" },
      { name: "爱奇艺", url: "https://www.iqiyi.com" },
    ],
  },
  {
    category: "音乐",
    links: [
      { name: "Spotify", url: "https://www.spotify.com" },
      { name: "网易云音乐", url: "https://music.163.com" },
      { name: "QQ音乐", url: "https://y.qq.com" },
    ],
  },
  {
    category: "学习",
    links: [
      { name: "Coursera", url: "https://www.coursera.org" },
      { name: "Khan Academy", url: "https://www.khanacademy.org" },
      { name: "慕课网", url: "https://www.imooc.com" },
    ],
  },
  {
    category: "食物",
    links: [
      { name: "下厨房", url: "https://www.xiachufang.com" },
      { name: "美团", url: "https://www.meituan.com" },
      { name: "饿了么", url: "https://www.ele.me" },
    ],
  },
  {
    category: "运动",
    links: [
      { name: "Keep", url: "https://www.keep.com" },
      { name: "咕咚", url: "https://www.gotokeep.com" },
    ],
  },
  {
    category: "旅游",
    links: [
      { name: "携程", url: "https://www.ctrip.com" },
      { name: "飞猪", url: "https://www.fliggy.com" },
      { name: "马蜂窝", url: "https://www.mafengwo.cn" },
      { name: "携程国际", url: "https://www.trip.com" },
      { name: "去哪儿", url: "https://www.qnear.com" },
    ],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-6 bg-blue-600 text-white text-center">
        <h1 className="text-3xl font-bold">分类导航网站</h1>
        <p className="mt-2 text-lg">快速访问常用网站，按类别分组管理</p>
      </header>
      <main className="py-10 max-w-7xl mx-auto">
        {categories.map((category) => (
          <section key={category.category} className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {category.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-blue-600">{link.name}</h3>
                  <p className="text-gray-500 mt-1">{link.url}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer className="py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} 分类导航网站. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

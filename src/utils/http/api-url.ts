const PROTOCOL: string = "http:";

// const DOMAIN: string = `${PROTOCOL}//api.ieee.org`;
// const DOMAIN: string = `${PROTOCOL}//127.0.0.1:9511/api/cpsi`;
const DOMAIN: string = `/api/cpsi`;

export const PUBLICATION = {
  // 发行
  LIST: `${DOMAIN}/publication/list`, // 发行列表
};
export const ARTICLE = {
  // 文章
  LIST: `${DOMAIN}/article/list`, // 文章列表
  SEARCH: `${DOMAIN}/article/search`, // 搜索
  AUTHOR: `${DOMAIN}/article/author`, // 作者，get查询，post创建，put修改
  AUTHOR_SEARCH: `${DOMAIN}/article/author/search`, // 作者搜索
  MY_LIST: `${DOMAIN}/article/my/list`, // 我的文章列表
  POPULAR: `${DOMAIN}/article/popular`, // 热门文章
  ISSUE: `${DOMAIN}/article/issue`, // 期刊文章
  EARLY_ACCESS: `${DOMAIN}/article/early-access`, // 提前访问
  DETAIL: `${DOMAIN}/article/detail`, // 文章详情
  SIGN: `${DOMAIN}/article/sign`, // 签名
  PROOF: `${DOMAIN}/article/proof`, // 证明
  WITHDRAW: `${DOMAIN}/article/withdraw`, // 撤回
  SUBMIT: `${DOMAIN}/article/submit`, // 提交文章
  UPLOAD: `${DOMAIN}/article/upload` // 上传文章
};

export const PDF = { // pdf
  BROWSE: `${DOMAIN}/article/browse`, // 在线浏览
  DOWNLOAD: `${DOMAIN}/article/download`, // 下载
}

export const ISSUE = {
  // 版号
  LIST: `${DOMAIN}/issue/list`, // 期刊版本列表
}
export const POPULAR = `${DOMAIN}/popular`;
export const ABOUT = `${DOMAIN}/about`;
export const USER = {
  // 用户
  ME: `${DOMAIN}/user/me`, // 用户自身信息
  TOKEN_LOGIN: `${DOMAIN}/user/token-login`, // token登录
  USER_ID: `${DOMAIN}/user/id` // 根据用户id查找用户
};
export const ADMIN = {
  LIST: `${DOMAIN}/article/admin/list`, // 文章列表
  AUDIT: `${DOMAIN}/article/admin/audit` // 审核
};

export const SSO_LOGIN = `${PROTOCOL}//pillar.j-cpsi.com/user/login`;
// export const SSO_LOGIN = `${PROTOCOL}//pillar.casia.com/user/login`;

export default { ISSUE, ARTICLE, ADMIN, POPULAR, ABOUT, USER, SSO_LOGIN };

/*
 * @Author: 朽木白
 * @Date: 2023-05-22 09:31:16
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2023-06-01 11:16:32
 * @Description: 接口
 * @docs: http://139.198.152.148:8110/doc.html#/home
 */

export { login, getUserInfo, logout } from './user'
export {
  getAclUserList,
  addAclUser,
  updateAclUser,
  deleteAclUserById,
  batchAclUser,
  getUserRolesList,
  assignUserRoles,
} from './acl/account'

export { getRoleList, deleteRole, addRole, updateRole } from './acl/role'

export {
  getRolePermission,
  assignRolePermission,
  getPermissionList,
  deletePermission,
  addPermission,
  updatePermission,
} from './acl/permission'

export { getStatics } from './statics'
export { findByParentId, findByDictCode } from './base/dict'
export {
  getShipperList,
  deleteShipperById,
  addShipper,
  updateShipper,
} from './base/shipper'

export { getGoodsNodeList, getGoodsTypeList } from './base/goodsType'
export {
  getGoodsInfoList,
  deleteGoodsById,
  updateStatus,
  addGoodInfo,
  updateGoodInfo,
  findGoodsTypeIdList,
  getProductList,
} from './base/goodsInfo'

export { getConfig } from './base/wareConfig'
export {
  getWarehouseInfoList,
  deleteWarehouseInfoById,
  addWarehouseInfo,
  updateWarehouseInfo,
} from './ware/warehouseInfo'

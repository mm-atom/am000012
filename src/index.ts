import am1 from '@mmstudio/am000001';

/**
 * @param mm 系统参数
 * @param page_name 页面名
 * @param params 传参
 */
export default function goto(mm: am1, page_name: string, params: object) {
	const { navigation } = mm.props;
	navigation.navigate(page_name, params);
}

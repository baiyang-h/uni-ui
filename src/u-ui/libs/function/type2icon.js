/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标
 */
function type2icon(type = 'success', fill = false) {
	// 如果非预置值,默认为success
	if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) === -1) type = 'success';
	let iconName = '';
	// info和primary使用同一个图标
	switch (type) {
		case 'primary':
			iconName = 'icon-roundcheck';
			break;
		case 'info':
			iconName = 'icon-roundcheck';
			break;
		case 'error':
			iconName = 'icon-round_close_light';
			break;
		case 'warning':
			iconName = 'icon-jinggao';
			break;
		case 'success':
			iconName = 'icon-roundcheck';
			break;
		default:
			iconName = 'icon-roundcheck';
	}
	if (fill) {
		switch (type) {
			case 'primary':
				iconName = 'icon-roundcheckfill';
				break;
			case 'info':
				iconName = 'icon-roundcheckfill';
				break;
			case 'error':
				iconName = 'icon-round_close_fill_light';
				break;
			case 'warning':
				iconName = 'icon-jinggao1';
				break;
			case 'success':
				iconName = 'icon-roundcheckfill';
				break;
			default:
				iconName = 'icon-roundcheckfill';
		}
		return iconName;
	}
}

export default type2icon;

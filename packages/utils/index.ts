import type { PluginObject } from 'vue'

type SFCWithInstall<T> = T & PluginObject<any>

export const withInstall = <T>(main: T) => {
	;(main as SFCWithInstall<T>).install = (Vue): void => {
		Vue.component((main as any).name, main)
	}
	return main as SFCWithInstall<T>
}

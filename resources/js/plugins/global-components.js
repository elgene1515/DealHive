export default{
    install(app){
        const componentsPath = {
            ...import.meta.glob('../components/base/*vue', {eager: true}),
            ...import.meta.glob('../components/shared/*vue', {eager: true}),
            ...import.meta.glob('../components/icons/*vue', {eager: true}),
            ...import.meta.glob('../components/layouts/*vue', {eager: true}),
        }

        for(const path in componentsPath){
            const component = componentsPath[path].default;
            const name = component.name || path.split('/').pop().replace('.vue', '')
            app.component(name, component)
        }
    }
}
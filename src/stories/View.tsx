export function LightView(props: {children: JSX.Element}){
    return <div className="p-32 text-neutral-800">
        {props.children}
    </div>
}

export function DarkView(props: {children: JSX.Element}){
    return <div className="dark bg-neutral-900 p-32 text-neutral-200" style={{
    }}>
        {props.children}
    </div>
}
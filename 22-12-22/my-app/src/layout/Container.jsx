export function Container(props) {
    const { children, withRow } = props;

    console.log({ withRow })

    return (
        <div className="container">
            {
                withRow
                    ? (<div className="row">{children}</div>)
                    : children
            }

            {/* Oppure: */}
            {/* 
            { withRow && (<div className="row">{children}</div>) }
            { !withRow && (children) } 
            */}
        </div>
    )
}

    // Modalità 1:
    // return (
    //     <div className="container">
    //         <div className={withRow ? 'row' : ''}>{children}</div>
    //     </div>
    // )

    // Modalità 2:
    // if (withRow) {
    //     return (
    //         <div className="container">
    //             <div className="row">{children}</div>
    //         </div>
    //     )
    // }

    // return (
    //     <div className="container">
    //         {children}
    //     </div>
    // )
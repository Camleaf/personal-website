import './pageLabel.css';

function PageLabel() {
    return (
        <>
            <div className='label-wrapper'>
                <h1 className="label-text"> 
                    ~/
                    <span className="text-highlight"> 
                    {(location.pathname=="/") ? "home" : location.pathname.slice(1)}
                    </span>
                    .tsx
                </h1>
            </div>
        </>
    );
}

export default PageLabel;



export function NumbersCard() {

    return (
        <div className='full-margin bg-neutral-dark flex'>
            <section className="main-container py-28 md:flex md:flex-row gap-8 justify-between grid grid-cols-2">

                <NumberItem 
                    number="500+"
                    description="Premium Vehicles"
                />
                
                <NumberItem 
                    number="15+"
                    description="Luxury Brands"
                />

                <NumberItem 
                    number="98%"
                    description="Client Satisfaction"
                />

                <NumberItem 
                    number="25"
                    description="Years Experience"
                />

            </section>    
        </div>
    )
}


type NumberItemProps = {
    number: string;
    description: string;
}
function NumberItem({ number, description}: NumberItemProps) {
    return (
        <div className="text-center">
            <div className="section-title mb-2 text-primary font-medium">{number}</div>
            <div className="text-neutral font-medium text-lg">{description}</div>
        </div>
    )
}
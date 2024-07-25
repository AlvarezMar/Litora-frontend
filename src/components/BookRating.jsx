import { Rating, RatingStar } from "flowbite-react";

function BookRating({ rating }) {
    // Asegúrate de que el rating sea un número entero
    const integerRating = Math.floor(rating);
    // Verifica que el rating sea un valor válido y entre 0 y 5
    const validRating = Math.max(0, Math.min(5, integerRating));

    return (
        <div className="flex items-center">
            <Rating>
                {Array.from({ length: 5 }, (_, index) => (
                    <RatingStar
                        key={index}
                        filled={index < validRating}
                    />
                ))}
            </Rating>
        </div>
    );
}

export default BookRating;
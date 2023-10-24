import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArrowSvg() {
    return (
        <>
            <FontAwesomeIcon
                className="arrow"
                icon={faArrowRight}
                style={{ color: "#ffffff" }}
            />
        </>
    );
}

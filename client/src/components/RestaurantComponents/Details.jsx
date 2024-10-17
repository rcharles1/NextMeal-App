import PropTypes from 'prop-types';
import { OpenIcon } from '../svgs/InterfaceSvg';

function Details({ restaurantDoc }) {
  if (!restaurantDoc) {
    return <p>Fetching data. Please wait...</p>;
  }

  const { address, hours, phone, platforms } = restaurantDoc.details;

  return (
    <div className="grid grid-cols-1 divide-y-2 gap-2 divide-light_dark/5 antialiased text-base ssm:text-sm">
      <div className="flex flex-row justify-between items-top p-1">
        <span>Address</span>
        <span className="font-medium max-w-56 text-right text-wrap">{address}</span>
      </div>
      <div className="flex flex-row justify-between items-top p-1">
        <span>Hours</span>
        <span className="font-medium">
          <p>{hours.openhours}</p>
          <p>{hours.opendays}</p>
        </span>
      </div>
      <div className="flex flex-row justify-between items-top p-1">
        <span>Phone</span>
        <span className="font-medium space-x-1">{phone[0]}</span>
      </div>
      <div className="flex flex-row justify-between items-top p-1">
        <span>Platforms</span>
        <span className="font-medium w-max-48 md:w-32 text-right">
          <a href={platforms.website} target="_blank" rel="noopener noreferrer" className="flex w-full text-wrap truncate underline">
            {restaurantDoc.name}
            <OpenIcon />
          </a>
        </span>
      </div>
    </div>
  );
}

Details.propTypes = {
  restaurantDoc: PropTypes.object.isRequired,
};

export default Details;
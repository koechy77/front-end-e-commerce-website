import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState(() => {
    const savedForm = localStorage.getItem("checkoutForm");

    const savedTime = localStorage.getItem("checkoutFormTime");

    if (savedForm && savedTime) {
      const timeDifference = Date.now() - Number(savedTime);

      if (timeDifference < 7 * 60 * 1000) {
        try {
          const parsedForm = JSON.parse(savedForm);
          if (parsedForm && typeof parsedForm === "object") return parsedForm;
        } catch {
          localStorage.removeItem("checkoutForm");
          localStorage.removeItem("checkoutFormTime");
        }
      }
    }

    localStorage.removeItem("checkoutForm");
    localStorage.removeItem("checkoutFormTime");

    return {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("checkoutForm", JSON.stringify(formData));
    localStorage.setItem("checkoutFormTime", Date.now().toString());
  }, [formData]);

  useEffect(() => {
    let active = true;

    import("country-state-city").then(({ Country }) => {
      if (active) {
        setCountries(Country.getAllCountries());
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    if (!formData.country) {
      return undefined;
    }

    import("country-state-city").then(({ State }) => {
      if (active) {
        setStates(State.getStatesOfCountry(formData.country));
      }
    });

    return () => {
      active = false;
    };
  }, [formData.country]);

  useEffect(() => {
    let active = true;

    if (!formData.country || !formData.state) {
      return undefined;
    }

    import("country-state-city").then(({ City }) => {
      if (active) {
        setCities(City.getCitiesOfState(formData.country, formData.state));
      }
    });

    return () => {
      active = false;
    };
  }, [formData.country, formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      setFormData((prev) => ({
        ...prev,
        country: value,
        state: "",
        city: "",
      }));
    } else if (name === "state") {
      setFormData((prev) => ({
        ...prev,
        state: value,
        city: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("orderConfirmed", "true");
    navigate("/ordersuccess");
  };

  const inputStyle = `w-full border border-gray-300 rounded-lg
    px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black`;

  return (
    <form
      id="check-out-form"
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-5"
    >
      <input
        type="text"
        placeholder="Full Name"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        className={inputStyle}
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={inputStyle}
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className={inputStyle}
        required
      />

      <input
        type="text"
        placeholder="Street Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className={inputStyle}
        required
      />

      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className={inputStyle}
        required
      >
        <option value="">--select country--</option>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
        className={inputStyle}
        required
      >
        <option value="">--select state--</option>
        {states.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>

      <select
        name="city"
        value={formData.city}
        onChange={handleChange}
        className={inputStyle}
        required
      >
        <option value="">--select city--</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </form>
  );
}

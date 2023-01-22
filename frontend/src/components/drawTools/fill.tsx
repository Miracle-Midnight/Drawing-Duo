/* library */
import { useDispatch } from "react-redux";
/* module from local */
import { fill } from "../../states/drawToolSlice";

export function Fill() {
  const dispatch = useDispatch();

  return (
    <button className="w-10 h-10 " onClick={() => dispatch(fill())}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 32 32"
        className="m-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path d="m0 0h32v32h-32z" />

          <path
            d="m27.9996662 22.2 2.6132495 3.9198743c.9621719 1.4432578.5721747 3.3932439-.8710831 4.3554158-.5159208.3439472-1.1221068.5274855-1.7421664.5274855-1.73458 0-3.140735-1.4061549-3.140735-3.140735 0-.6200596.1835383-1.2262456.5274855-1.7421663zm-5.1861788-12.83119422c4.4910294 4.49102932 6.6764277 9.84225252 4.7238062 11.79487402-.1409463.1409463-.2996006.2603318-.4743613.3588458l-11.2859854 7.9273491c-1.9300694 1.4301953-4.5934806 1.2808401-6.35036118-.3267591l-.16200166-.1549809-6.05042559-6.0504256c-1.69862095-1.6986209-1.94278878-4.3550186-.61783908-6.3202401l.12881455-.1821643 8.04691746-11.14655466c.1023446-.18285504.2268435-.34880774.3741741-.49613834 1.9526215-1.95262145 7.1762326.10516473 11.6672619 4.59619408zm5.1861788 16.43696982-.9491489 1.4234991c-.099939.1499085-.1625907.3207994-.1836538.4984668l-.0079323.1342991c0 .6300106.5107245 1.140735 1.140735 1.140735.2252096 0 .4453803-.0666623.632766-.1915861.5242004-.349467.6658499-1.0577144.3163829-1.5819148zm-17.2809224-17.04429882-6.37941578 8.83460112c-.849536 1.1464612-.77020153 2.7241714.16738123 3.7784306l.12166278.1289871 6.05042557 6.0504256c1.0089809 1.0089808 2.5811919 1.1626559 3.7801168.3772826l9.0811485-6.3774237c-2.3428022-.7078688-5.2127092-2.5289724-7.7976433-5.1139065-2.5696096-2.5696096-4.3426417-5.3790464-5.0236758-7.67839682zm1.8852557-2.61104977-.1369925.18869214c-.1529673.38962924-.0896715 1.28391391.4217633 2.5821715.7494529 1.90245745 2.2660792 4.10258565 4.2678629 6.10436935 3.5792427 3.5792427 7.6081813 5.3335805 8.7754925 4.8475925l.2153702-.1531105.0232414-.0258727c.7112184-.951876-1.0366015-5.176388-4.7714635-8.91125-2.0017836-2.00178364-4.2019119-3.51840989-6.1043693-4.26786283-1.4389022-.56684024-2.3815629-.58318529-2.690905-.36472946z"
            fill="#000000"
          />
        </g>
      </svg>
    </button>
  );
}

export default Fill;

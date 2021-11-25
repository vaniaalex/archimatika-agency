<template>
  <div class='container page'>
    <PTitle title='Interactive real estate selling & leasing tool' />
    <PHero title='impactful 3D sales & presentation tools' description='Help your client discover the hidden potential of your real estate presenting it from an objective, detailed
        and informative side' second-description='Interactive 3D tool for real estate has become a fast, user-friendly, and immersive solution that took real
        estate sales to the next level.' :button='{text: "See demo"}'>
      <img src='~/assets/images/products/real-estate/hero.png' alt=''>
    </PHero>
    <div ref='skewedImage' class='image-text-skewed'>
      <div class='inside'>
        <div class='text'>
          <h3>
            Open up tangible opportunities with the help of a virtual world
          </h3>
          <h5>A new apartment is a significant investment of time, money, and effort. That is why a customer needs to
            have a complete understanding of its layout, floor plans, common areas, region infrastructure, and other
            valuable details</h5>
          <h5>More and more real estate developers are now switching towards online tools in order to enhance it,
            increase conversion rate and widen the sales funnel.</h5>
        </div>
        <div class='image'>
          <img src='~/assets/images/products/real-estate/building.png' alt=''>
        </div>
      </div>
      <div class='skewed-4x skewed'></div>
      <div class='skewed-3x skewed'></div>
      <div class='skewed-2x skewed'></div>
      <div class='skewed-1x skewed'></div>
      <div class='skewed-0x skewed'></div>
    </div>
    <PIcons :content='contentIcon'  />
    <div class='small-big-text'>
      <translate-wrapper start='center'>
        <h4>This level of convenience and customer immersion has greatly enforced the competitive advantage of
          agents
          by attracting prospects, increasing engagement, and earning higher commissions.</h4>
      </translate-wrapper>
      <translate-wrapper start='center' :delay='0.3'>
        <h2>Interactive 3D tool for real estate has become a fast, user-friendly, and immersive solution that took real
          estate sales to the next level.</h2>
      </translate-wrapper>
    </div>
    <div class='block-heading'>
      <translate-wrapper start='center'>
        <h2>Features</h2>
      </translate-wrapper>
      <translate-wrapper start='center' :delay='0.3'>
        <h4>Archimatika works online from any computer. No install needed, everything is available at one click.
          It’s fast and easy to use, both for clients and sellers. Besides that, the system allows configuring the
          features to your needs.</h4>
      </translate-wrapper>
    </div>
    <PCard :left='false' :icon='true'  :image='require("~/assets/images/products/real-estate/filter.png")'>
      <h4>Filter</h4>
      <h5>Offer the most suitable solution for your customers with the help of numerous filters</h5>
      <div class='icons-small-block'>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-1.svg' alt=''>
        </div>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-2.svg' alt=''>
        </div>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-3.svg' alt=''>
        </div>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-4.svg' alt=''>
        </div>
      </div>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/real-estate/floor-plans.png")'>
      <h4>Floor plans</h4>
      <div class='flex'>
      <h5 class='mb-1'>Reveal a detailed layout of each unit, containing availability, 3D picture, floor plans, and
        many more.</h5>
      <h5>Get contact information from those who are particularly interested in the proposal right here.
      </h5>
      </div>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/real-estate/common-area.png")'>
      <h4>Common area<br>
        & amenities</h4>
      <h5>Showcase public spaces for tenants to meet and communicate. Pools, bars, gyms, terraces, or any other space
        that can be easily shared by them.</h5>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/real-estate/surroundings.png")'>
      <h4>Surroundings</h4>
      <h5>Inform your clients about the region’s outstanding infrastructure by demonstrating amenities situated within
        easy reach such as parks, malls, banks, restaurants, and health club facilities.</h5>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/real-estate/units.png")'>
      <h4>Unit information<br>
        & unit plans</h4>
      <div class='flex'>
      <h5 class='mb-1'>Display the important information about units with ease and style. It is usually displayed in a
        pop-up with the unit number, characteristics, price, and other useful information.</h5>
      <h5>The pop-up contains different buttons to open the plan, panoramic view, send the information by email,
        etc.</h5>
      </div>
      <div class='small-image image-1'>
        <img src='~/assets/images/products/real-estate/house-card.png' alt=''>
      </div>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/real-estate/interior-visit.png")'>
      <h4>Interior visit</h4>
      <div class='flex'>
      <h5 class='mb-1'>Seeing is believing. It’s not easy for users to figure out how their future home will look like
        just by pictures.</h5>
      <h5>So, Archimatika is all-ready to provide an immersive experience with virtual interior visits. To help people
        develop the vision of real estate.</h5>
      </div>
      <div class='small-image image-2'>
        <img src='~/assets/images/products/real-estate/plan.png' alt=''>
      </div>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/real-estate/email-managment.png")'>
      <h4>Email and customer relationship management</h4>
      <h5>This tool supports sending users information about selected units (plans, documents, images, technical
        details, or pricing), while saving the contact info to your CRM.</h5>
      <div class='small-image image-3'>
        <img src='~/assets/images/products/real-estate/form.png' alt=''>
      </div>
    </PCard>

    <div ref='spinnerBlock' class='big-image-text-block'>
      <div class='text'>
        <translate-wrapper start='center'>
          <h2>Online content management and
            connectivity</h2>
        </translate-wrapper>
        <translate-wrapper start='center' :delay='0.3'>
          <h4>Besides real-time connectivity with any CRM, ERP, or asset management software, Archimatika comes with
            an online Content Management System. </h4>
        </translate-wrapper>
        <translate-wrapper start='center' :delay='0.6'>
          <h4 class='smaller'>Since projects always evolve through time, online management allows easily changing unit prices, plans,
            texts, images, videos, or any other content without on your own.</h4>
        </translate-wrapper>
        <translate-wrapper start='center' :delay='0.9'>
          <h5>Moreover, we can connect to any existing API to centralize updates, as an example, any content shared by
            both the Archimatika tool and your website will be updated all simultaneously.</h5>
        </translate-wrapper>

      </div>
      <div class='image'>
        <svg width='998' height='897' viewBox='0 0 998 897' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path id='innerCircle'
                d='M540.664 416.17C527.008 440.041 520.18 451.976 511.246 455.971C503.454 459.455 494.546 459.455 486.754 455.971C477.82 451.976 470.992 440.041 457.336 416.17L413.095 338.835C399.601 315.247 392.854 303.453 393.897 293.781C394.808 285.345 399.249 277.688 406.12 272.709C413.996 267 427.584 267 454.759 267L543.241 267C570.416 267 584.004 267 591.88 272.708C598.751 277.688 603.192 285.345 604.103 293.781C605.146 303.453 598.399 315.247 584.905 338.835L540.664 416.17Z'
                fill='#0EFBCA' />
          <path id='bigCircle'
                d='M607.707 532.402C589.571 562.876 576.021 585.642 564.075 602.086C552.126 618.535 541.919 628.459 530.549 633.449C510.442 642.274 487.558 642.274 467.451 633.449C456.081 628.459 445.874 618.535 433.925 602.086C421.98 585.642 408.429 562.876 390.294 532.402L274.42 337.693C255.552 305.989 241.456 282.299 232.378 263.281C223.297 244.254 219.354 230.127 220.561 217.517C222.696 195.227 234.248 174.909 252.311 161.676C262.529 154.19 276.686 150.353 297.681 148.427C318.667 146.502 346.233 146.5 383.126 146.5L614.874 146.5C651.767 146.5 679.333 146.501 700.319 148.427C721.314 150.353 735.471 154.189 745.689 161.676C763.752 174.909 775.304 195.227 777.439 217.517C778.646 230.127 774.703 244.254 765.622 263.281C756.544 282.299 742.448 305.989 723.58 337.693L607.707 532.402Z'
                stroke='#080708' stroke-width='3' />
          <path id='mediumCircle'
                d='M581.203 495.103C567.557 518.659 557.357 536.266 548.348 548.978C539.336 561.693 531.609 569.373 522.966 573.215C507.709 579.998 490.292 579.998 475.034 573.215C466.391 569.373 458.664 561.693 449.652 548.978C440.644 536.266 430.443 518.659 416.797 495.103L320.354 328.62C306.648 304.96 296.405 287.275 289.833 273.08C283.259 258.88 280.434 248.321 281.415 238.893C283.147 222.249 291.865 207.125 305.398 197.283C313.064 191.708 323.617 188.86 339.2 187.43C354.777 186.001 375.214 186 402.557 186L595.443 186C622.785 186 643.223 186.001 658.8 187.43C674.383 188.86 684.936 191.708 692.602 197.283C706.135 207.125 714.853 222.249 716.585 238.893C717.566 248.321 714.741 258.88 708.167 273.08C701.596 287.275 691.352 304.96 677.646 328.62L581.203 495.103Z'
                stroke='#080708' stroke-width='2' />
          <path id='smallCircle'
                d='M554.487 478.264C545.351 494.681 538.515 506.963 532.462 515.825C526.407 524.69 521.18 530.059 515.294 532.724C504.937 537.414 493.063 537.414 482.706 532.724C476.82 530.059 471.593 524.69 465.538 515.825C459.485 506.963 452.649 494.681 443.513 478.265L355.372 319.878C346.66 304.224 340.144 292.514 335.988 283.117C331.832 273.717 330.072 266.705 330.801 260.437C332.084 249.404 337.953 239.421 346.971 232.934C352.093 229.25 359.076 227.378 369.31 226.439C379.543 225.5 392.944 225.5 410.858 225.5L587.141 225.5C605.056 225.5 618.457 225.5 628.69 226.439C638.924 227.378 645.907 229.25 651.029 232.934C660.047 239.421 665.916 249.404 667.199 260.437C667.928 266.705 666.168 273.717 662.012 283.117C657.856 292.514 651.34 304.224 642.628 319.878L554.487 478.264Z'
                stroke='#080708' />
          <g class='textSvg'>
            <rect width='81' height='65' transform='translate(458 154)' fill='#FAFFFD' />
            <path
              d='M491.292 200H486.144V191.72H475.884V200H470.736V174.8H491.292V200ZM475.884 179.696V186.788H486.144V179.696H475.884ZM515.616 191.648H501.864V200H496.716V174.8H515.616V191.648ZM501.864 179.696V186.716H510.468V179.696H501.864ZM525.982 200H520.834V174.8H525.982V200Z'
              fill='#080708' />
          </g>
          <g class='textSvg'>
            <rect width='104' height='65' transform='translate(372.293 362) rotate(60)' fill='#FAFFFD' />
            <path
              d='M367.034 393.627C368.594 396.329 369.166 399.144 368.75 402.072C368.335 405 367.011 407.483 364.778 409.52L362.078 404.843C363.132 403.597 363.72 402.191 363.841 400.625C363.995 399.067 363.646 397.55 362.794 396.075C361.654 394.1 360.041 392.842 357.954 392.301C355.88 391.78 353.825 392.108 351.788 393.284C350.437 394.064 349.389 395.057 348.644 396.263C347.932 397.477 347.575 398.778 347.572 400.166C347.581 401.574 347.958 402.922 348.702 404.211C349.266 405.188 349.965 405.99 350.798 406.617C351.643 407.265 352.562 407.705 353.554 407.935C354.567 408.154 355.59 408.173 356.622 407.993L359.322 412.67C356.463 413.573 353.65 413.478 350.886 412.386C348.142 411.282 345.991 409.379 344.431 406.677C343.219 404.577 342.597 402.373 342.566 400.063C342.556 397.741 343.125 395.583 344.274 393.59C345.435 391.617 347.076 390.018 349.196 388.794C351.316 387.57 353.52 386.949 355.81 386.93C358.111 386.931 360.248 387.513 362.221 388.674C364.205 389.856 365.81 391.507 367.034 393.627ZM370.598 432.632L369.086 430.013L363.121 438.113L360.349 433.312L366.296 425.181L363.758 420.785L355.777 425.393L353.203 420.935L375.027 408.335L384.441 424.64L370.598 432.632ZM373.361 415.241L367.562 418.589L372.026 426.321L377.825 422.973L373.361 415.241ZM378.059 463.987L375.485 459.528L390.824 450.672L378.226 449.3L377.992 448.894L383.12 437.329L367.781 446.185L365.189 441.695L387.013 429.095L389.983 434.239L385.257 444.991L396.913 446.243L399.883 451.387L378.059 463.987Z'
              fill='#080708' />
          </g>
          <g class='textSvg'>
            <rect width='90' height='65' transform='translate(577 445.942) rotate(-60)' fill='#FAFFFD' />
            <path
              d='M614.081 433.108L608.195 443.302L612.591 445.84L618.063 436.363L622.303 438.811L616.831 448.288L621.539 451.006L627.425 440.812L631.665 443.26L623.205 457.913L601.381 445.313L609.841 430.66L614.081 433.108ZM635.36 418.427L633.848 421.046L643.846 422.162L641.074 426.963L631.058 425.878L628.52 430.274L636.502 434.882L633.928 439.341L612.104 426.741L621.518 410.435L635.36 418.427ZM618.918 424.73L624.717 428.078L629.181 420.346L623.382 416.998L618.918 424.73ZM648.221 397.88L641.345 409.79L648.578 413.966L646.004 418.424L624.18 405.824L633.63 389.456L648.221 397.88ZM630.994 403.814L637.074 407.324L641.376 399.872L635.296 396.362L630.994 403.814Z'
              fill='#080708' />
          </g>
          <g id='arrows' filter='url(#filter0_d_1245:6313)'>
            <path fill-rule='evenodd' clip-rule='evenodd'
                  d='M519.331 784.912C510.365 800.485 487.894 800.485 478.928 784.912L434.679 708.058C424.535 690.438 437.253 668.44 457.585 668.44C472.182 668.44 484.015 656.607 484.015 642.009L484.015 499.218C484.015 490.871 490.782 484.104 499.129 484.104C507.476 484.104 514.243 490.871 514.243 499.218L514.243 642.009C514.243 656.607 526.076 668.44 540.674 668.44C561.006 668.44 573.724 690.438 563.579 708.058L519.331 784.912ZM416.085 292.169C420.262 284.905 429.543 282.413 436.796 286.608L471.525 306.69C488.601 316.565 509.652 316.562 526.725 306.683L561.409 286.613C568.661 282.417 577.943 284.906 582.122 292.169C586.286 299.406 583.807 308.649 576.58 312.831L541.855 332.924C524.766 342.813 514.243 361.059 514.243 380.803L514.243 421.005C514.243 429.352 507.476 436.119 499.129 436.119C490.782 436.119 484.015 429.352 484.015 421.005L484.015 380.811C484.015 361.065 473.488 342.817 456.395 332.932L421.633 312.83C414.404 308.65 411.922 299.408 416.085 292.169ZM235.662 139.748C228.376 152.418 232.719 168.595 245.372 175.912L369.061 247.438C376.29 251.618 378.771 260.861 374.609 268.1C370.432 275.363 361.151 277.855 353.898 273.66L230.281 202.176C217.641 194.867 201.468 199.209 194.189 211.867C184.047 229.503 158.605 229.517 148.445 211.89L104.09 134.943C95.1549 119.442 106.337 100.079 124.228 100.069L212.668 100.024C233.06 100.013 245.828 122.07 235.662 139.748ZM752.649 175.955C765.299 168.635 769.638 152.457 762.349 139.789C752.178 122.114 764.94 100.053 785.332 100.058L873.772 100.08C891.663 100.085 902.85 119.445 893.919 134.948L849.585 211.907C839.43 229.537 813.988 229.531 803.841 211.896C796.558 199.241 780.385 194.903 767.747 202.215L644.285 273.655C637.033 277.851 627.751 275.362 623.572 268.1C619.408 260.862 621.887 251.619 629.114 247.437L752.649 175.955Z'
                  fill='#FAFFFD' />
            <path
              d='M518.031 784.164C509.642 798.734 488.617 798.734 480.228 784.164L435.979 707.31C426.41 690.689 438.407 669.94 457.585 669.94C473.01 669.94 485.515 657.435 485.515 642.009L485.515 499.218C485.515 491.699 491.611 485.604 499.129 485.604C506.648 485.604 512.743 491.699 512.743 499.218L512.743 642.009C512.743 657.435 525.248 669.94 540.674 669.94C559.852 669.94 571.848 690.689 562.279 707.31L518.031 784.164ZM417.385 292.916C421.149 286.372 429.51 284.127 436.045 287.906L470.774 307.989C488.314 318.132 509.938 318.129 527.476 307.981L562.16 287.912C568.694 284.131 577.056 286.374 580.821 292.917C584.574 299.438 582.34 307.765 575.828 311.533L541.104 331.626C523.551 341.782 512.743 360.524 512.743 380.803L512.743 421.005C512.743 428.524 506.648 434.619 499.129 434.619C491.611 434.619 485.515 428.524 485.515 421.005L485.515 380.811C485.515 360.529 474.703 341.786 457.145 331.633L422.384 311.531C415.871 307.765 413.635 299.438 417.385 292.916ZM234.361 139C226.663 152.387 231.252 169.48 244.621 177.21L368.31 248.737C374.823 252.503 377.059 260.83 373.308 267.352C369.545 273.896 361.183 276.141 354.648 272.362L231.032 200.878C217.673 193.153 200.582 197.742 192.889 211.119C183.323 227.753 159.327 227.766 149.744 211.141L105.39 134.194C97.0307 119.692 107.491 101.578 124.229 101.569L212.668 101.524C231.907 101.514 243.952 122.323 234.361 139ZM753.4 177.254C766.766 169.519 771.351 152.426 763.649 139.041C754.054 122.366 766.093 101.554 785.332 101.558L873.771 101.58C890.509 101.584 900.975 119.696 892.62 134.199L848.286 211.159C838.707 227.786 814.711 227.78 805.141 211.148C797.445 197.773 780.352 193.189 766.995 200.917L643.534 272.357C637 276.137 628.637 273.894 624.872 267.351C621.12 260.831 623.354 252.503 629.865 248.735L753.4 177.254Z'
              stroke='#080708' stroke-width='3' />
          </g>
          <defs>
            <filter id='filter0_d_1245:6313' x='0.947266' y='0.0234375' width='996.111' height='896.568'
                    filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                             result='hardAlpha' />
              <feOffset />
              <feGaussianBlur stdDeviation='50' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0.054902 0 0 0 0 0.984314 0 0 0 0 0.792157 0 0 0 0.5 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1245:6313' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1245:6313' result='shape' />
            </filter>
          </defs>
        </svg>

      </div>
    </div>
    <div class='small-image-text-block'>
      <div ref='smallImageBlock' class='image'>
        <svg width='860' height='440' viewBox='0 0 860 440' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='0.5' y='0.5' width='859' height='439' rx='99.5' stroke='#080708' />
          <rect x='31' y='31' width='798' height='378' rx='79' stroke='#080708' stroke-width='2' />
          <rect x='61.5' y='61.5' width='477' height='317' rx='58.5' stroke='#080708' stroke-width='3' />
          <rect x='581.5' y='61.5' width='217' height='317' rx='58.5' stroke='#080708' stroke-width='3' />
          <rect x='121.5' y='151.5' width='77' height='137' rx='18.5' stroke='#080708' stroke-width='3' />
          <path
            d='M91.5 156.424C91.5 144.833 91.5004 136.17 92.0688 129.314C92.6368 122.465 93.7692 117.465 96.0074 113.191C99.9701 105.623 106.279 99.5444 113.989 95.8655C118.343 93.7878 123.381 92.8419 130.247 92.5288C137.119 92.2155 145.776 92.5369 157.359 92.9676L659.359 111.632C670.191 112.035 678.284 112.336 684.701 113.093C691.111 113.849 695.804 115.056 699.842 117.247C706.997 121.131 712.778 127.13 716.393 134.425C718.432 138.541 719.464 143.276 719.982 149.71C720.5 156.15 720.5 164.249 720.5 175.088V264.912C720.5 275.751 720.5 283.85 719.982 290.29C719.464 296.724 718.432 301.459 716.393 305.575C712.778 312.87 706.997 318.869 699.842 322.753C695.804 324.944 691.111 326.151 684.701 326.907C678.284 327.664 670.191 327.965 659.359 328.368L157.359 347.032C145.776 347.463 137.119 347.785 130.247 347.471C123.381 347.158 118.343 346.212 113.989 344.134C106.279 340.456 99.9701 334.377 96.0074 326.809C93.7692 322.535 92.6368 317.535 92.0688 310.686C91.5004 303.83 91.5 295.167 91.5 283.576V156.424Z'
            stroke='#080708' />
          <path
            d='M231 169.917C231 161.198 231.001 154.719 231.426 149.601C231.849 144.494 232.69 140.833 234.317 137.73C237.234 132.169 241.876 127.704 247.547 125.008C250.712 123.503 254.403 122.807 259.522 122.583C264.653 122.359 271.127 122.612 279.84 122.953L643.84 137.211C651.958 137.529 657.987 137.766 662.76 138.338C667.52 138.909 670.945 139.805 673.869 141.397C679.111 144.252 683.345 148.655 685.992 154.005C687.469 156.989 688.23 160.446 688.614 165.225C688.999 170.016 689 176.05 689 184.175V255.825C689 263.95 688.999 269.984 688.614 274.775C688.23 279.554 687.469 283.011 685.992 285.995C683.345 291.345 679.111 295.748 673.869 298.603C670.945 300.195 667.52 301.091 662.76 301.662C657.988 302.234 651.958 302.471 643.84 302.789L279.84 317.047C271.127 317.388 264.653 317.641 259.522 317.417C254.403 317.193 250.712 316.497 247.547 314.992C241.876 312.296 237.234 307.831 234.317 302.27C232.69 299.167 231.849 295.506 231.426 290.399C231.001 285.281 231 278.802 231 270.083V169.917Z'
            stroke='#080708' stroke-width='2' />
          <path
            d='M270 199.953C270 182.536 270 173.828 273.435 167.282C276.454 161.527 281.261 156.908 287.131 154.121C293.809 150.95 302.51 151.297 319.913 151.991L613.913 163.717C630.106 164.363 638.203 164.686 644.36 168.043C649.779 170.997 654.155 175.551 656.891 181.084C660 187.37 660 195.473 660 211.679V228.321C660 244.527 660 252.63 656.891 258.916C654.155 264.449 649.779 269.003 644.36 271.957C638.203 275.314 630.106 275.637 613.913 276.283L319.913 288.009C302.51 288.703 293.809 289.05 287.131 285.879C281.261 283.092 276.454 278.473 273.435 272.718C270 266.172 270 257.464 270 240.047V199.953Z'
            fill='#0EFBCA' />
        </svg>
      </div>
      <div class='text'>
        <translate-wrapper start='center'>
          <h3>Cross-platform solution</h3>
        </translate-wrapper>
        <translate-wrapper start='center' :delay='0.5'>
          <h4>3D interactive real estate visualization tool designed for PC touchscreen, smartphones, tablets, and web
            with an easy-to-use interface</h4>
        </translate-wrapper>
      </div>
    </div>
    <s-button ref='btnBig' size='big' @click='openDiscuss'>Let’s Discuss</s-button>
    <div class='medium-image-text-block mt-200'>
      <div class='text'>
        <translate-wrapper start='center'>
          <h2>Archimatika’s 3D tech
            benefits in a nutshell</h2>
        </translate-wrapper>
        <ul>
          <translate-wrapper start='center'>
            <li>Shorten customer’s booking cycle from <br><span>4 weeks to 4 hours.<s-line line='highlight-1' /></span>
            </li>
          </translate-wrapper>
          <translate-wrapper start='center'>
            <li>Give customers an accurate, real-time, immersive 3D experience of exploring their home.</li>
          </translate-wrapper>
          <translate-wrapper start='center'>
            <li>Respond to customer queries instantly and experience a 40% increase in closure rate.</li>
          </translate-wrapper>
          <translate-wrapper start='center'>
            <li>Improve sales velocity by achieving <br><span>15x more site visits and<s-line
              line='highlight-2' /></span>
              nearly 80% less lead loss.
            </li>
          </translate-wrapper>
          <translate-wrapper start='center'>
            <li>Cut down marketing and sales expenditure by up to 70%.</li>
          </translate-wrapper>
          <translate-wrapper start='center'>
            <li>Improve marketing <span>ROI by 60%.<s-line line='highlight-3' /></span>
            </li>
          </translate-wrapper>
        </ul>
      </div>
      <div ref='bublik' class='image'>
        <svg width='740' height='740' viewBox='0 0 740 740' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path class='bubliks'
                d='M500.108 238.892C504.037 234.963 506.002 232.998 506.725 230.575C507.33 228.552 507.23 226.066 506.466 224.097C505.552 221.74 503.59 220.07 499.667 216.729C470.393 191.799 434.451 175.759 396.105 170.711C352.455 164.964 308.128 173.781 270 195.795C231.872 217.808 202.072 251.788 185.224 292.463C170.423 328.196 166.343 367.342 173.296 405.159C174.227 410.227 174.693 412.761 176.277 414.732C177.6 416.378 179.704 417.707 181.758 418.195C184.218 418.78 186.902 418.061 192.27 416.623L267.612 396.435C272.967 395 275.644 394.283 277.293 392.95C278.936 391.622 279.763 390.445 280.456 388.449C281.15 386.446 280.873 383.148 280.317 376.553C279.118 362.31 281.323 347.905 286.851 334.558C294.433 316.255 307.842 300.964 325 291.058C342.158 281.152 362.105 277.184 381.747 279.77C396.07 281.656 409.647 286.949 421.382 295.109C426.816 298.888 429.533 300.777 431.616 301.177C433.69 301.575 435.124 301.447 437.094 300.689C439.073 299.927 441.033 297.967 444.953 294.047L500.108 238.892Z'
                fill='#0EFBCA' />
          <path class='bubliks'
                d='M437.623 567.73C439.061 573.098 439.78 575.782 441.516 577.62C442.967 579.155 445.17 580.312 447.257 580.635C449.755 581.021 452.182 580.158 457.037 578.431C484.951 568.5 510.377 552.466 531.421 531.421C552.466 510.377 568.5 484.951 578.431 457.037C580.158 452.182 581.021 449.755 580.635 447.257C580.312 445.17 579.155 442.967 577.62 441.517C575.782 439.78 573.098 439.061 567.73 437.623L492.388 417.435C487.033 416 484.356 415.283 482.261 415.612C480.175 415.941 478.869 416.547 477.272 417.929C475.669 419.316 474.26 422.311 471.444 428.3C467.035 437.676 461.022 446.257 453.64 453.64C446.257 461.022 437.676 467.035 428.3 471.444C422.311 474.26 419.316 475.669 417.929 477.272C416.547 478.869 415.94 480.175 415.612 482.261C415.283 484.356 416 487.033 417.435 492.388L437.623 567.73Z'
                fill='#0EFBCA' />
          <mask id='path-3-inside-1_1245:6288' fill='white'>
            <path
              d='M558.794 261C568.339 255.489 573.111 252.734 575.779 248.259C577.942 244.631 578.996 239.369 578.398 235.188C577.661 230.031 574.7 226.149 568.779 218.385C548.784 192.171 523.734 170.083 495 153.494C456.995 131.552 413.884 120 370 120C326.116 120 283.005 131.552 245 153.494C206.995 175.436 175.436 206.995 153.494 245C131.552 283.005 120 326.116 120 370C120 413.884 131.552 456.995 153.494 495C175.436 533.005 206.995 564.564 245 586.506C273.734 603.096 305.387 613.746 338.087 617.955C347.772 619.201 352.614 619.825 357.449 617.884C361.369 616.311 365.398 612.767 367.458 609.08C370 604.533 370 599.022 370 588L370 388.475C370 381.745 370 378.379 370.979 375.367C371.845 372.701 373.262 370.247 375.137 368.164C377.257 365.81 380.171 364.128 386 360.762L558.794 261Z' />
          </mask>
          <path class='radials'
                d='M558.794 261C568.339 255.489 573.111 252.734 575.779 248.259C577.942 244.631 578.996 239.369 578.398 235.188C577.661 230.031 574.7 226.149 568.779 218.385C548.784 192.171 523.734 170.083 495 153.494C456.995 131.552 413.884 120 370 120C326.116 120 283.005 131.552 245 153.494C206.995 175.436 175.436 206.995 153.494 245C131.552 283.005 120 326.116 120 370C120 413.884 131.552 456.995 153.494 495C175.436 533.005 206.995 564.564 245 586.506C273.734 603.096 305.387 613.746 338.087 617.955C347.772 619.201 352.614 619.825 357.449 617.884C361.369 616.311 365.398 612.767 367.458 609.08C370 604.533 370 599.022 370 588L370 388.475C370 381.745 370 378.379 370.979 375.367C371.845 372.701 373.262 370.247 375.137 368.164C377.257 365.81 380.171 364.128 386 360.762L558.794 261Z'
                stroke='black' stroke-width='2' mask='url(#path-3-inside-1_1245:6288)' />
          <mask id='path-4-inside-2_1245:6288' fill='white'>
            <path
              d='M607.618 306.331C628.484 300.739 638.918 297.944 646.568 290.146C652.483 284.116 657.381 273.158 657.929 264.729C658.638 253.828 654.636 245.915 646.631 230.088C633.392 203.913 616.457 179.653 596.258 158.086C561.409 120.878 517.921 92.8386 469.646 76.4517C421.372 60.0648 369.801 55.8362 319.502 64.1406C269.204 72.4449 221.729 93.0259 181.284 124.06C140.839 155.095 108.672 195.625 87.6322 242.061C66.5925 288.496 57.3295 339.404 60.6637 390.275C63.998 441.146 79.8265 490.409 106.747 533.701C122.351 558.793 141.402 581.431 163.258 600.993C176.474 612.821 183.082 618.736 193.794 620.872C202.078 622.525 213.93 620.629 221.286 616.476C230.798 611.105 236.199 601.751 247 583.042L356.745 392.958C361.637 384.485 364.083 380.249 367.342 376.815C370.231 373.77 373.582 371.199 377.27 369.196C381.431 366.937 386.156 365.671 395.606 363.139L607.618 306.331Z' />
          </mask>
          <path class='radials'
                d='M607.618 306.331C628.484 300.739 638.918 297.944 646.568 290.146C652.483 284.116 657.381 273.158 657.929 264.729C658.638 253.828 654.636 245.915 646.631 230.088C633.392 203.913 616.457 179.653 596.258 158.086C561.409 120.878 517.921 92.8386 469.646 76.4517C421.372 60.0648 369.801 55.8362 319.502 64.1406C269.204 72.4449 221.729 93.0259 181.284 124.06C140.839 155.095 108.672 195.625 87.6322 242.061C66.5925 288.496 57.3295 339.404 60.6637 390.275C63.998 441.146 79.8265 490.409 106.747 533.701C122.351 558.793 141.402 581.431 163.258 600.993C176.474 612.821 183.082 618.736 193.794 620.872C202.078 622.525 213.93 620.629 221.286 616.476C230.798 611.105 236.199 601.751 247 583.042L356.745 392.958C361.637 384.485 364.083 380.249 367.342 376.815C370.231 373.77 373.582 371.199 377.27 369.196C381.431 366.937 386.156 365.671 395.606 363.139L607.618 306.331Z'
                stroke='black' stroke-width='4' mask='url(#path-4-inside-2_1245:6288)' />
          <mask id='path-5-inside-3_1245:6288' fill='white'>
            <path
              d='M644 370C675.805 370 691.708 370 706.123 361.18C716.931 354.568 728.691 339.278 732.31 327.135C737.136 310.94 733.963 298.984 727.615 275.073C721.344 251.444 712.725 228.42 701.843 206.353C676.742 155.453 640.267 111.009 595.242 76.4593C550.216 41.91 497.846 18.1815 442.183 7.10945C386.521 -3.9626 329.057 -2.08142 274.237 12.6074C219.417 27.2963 168.712 54.3991 126.042 91.8193C83.3726 129.239 49.8832 175.974 28.1646 228.407C6.44598 280.84 -2.91965 337.567 0.792198 394.199C2.40141 418.751 6.44984 443 12.8323 466.598C19.2912 490.48 22.5207 502.421 34.7978 514.033C44.0031 522.74 61.8326 530.101 74.4993 530.423C91.3928 530.854 105.165 522.903 132.709 507L347.723 382.862C356.019 378.072 360.166 375.677 364.575 373.985C368.489 372.483 372.55 371.395 376.691 370.739C381.355 370 386.144 370 395.723 370H644Z' />
          </mask>
          <path class='radials'
                d='M644 370C675.805 370 691.708 370 706.123 361.18C716.931 354.568 728.691 339.278 732.31 327.135C737.136 310.94 733.963 298.984 727.615 275.073C721.344 251.444 712.725 228.42 701.843 206.353C676.742 155.453 640.267 111.009 595.242 76.4593C550.216 41.91 497.846 18.1815 442.183 7.10945C386.521 -3.9626 329.057 -2.08142 274.237 12.6074C219.417 27.2963 168.712 54.3991 126.042 91.8193C83.3726 129.239 49.8832 175.974 28.1646 228.407C6.44598 280.84 -2.91965 337.567 0.792198 394.199C2.40141 418.751 6.44984 443 12.8323 466.598C19.2912 490.48 22.5207 502.421 34.7978 514.033C44.0031 522.74 61.8326 530.101 74.4993 530.423C91.3928 530.854 105.165 522.903 132.709 507L347.723 382.862C356.019 378.072 360.166 375.677 364.575 373.985C368.489 372.483 372.55 371.395 376.691 370.739C381.355 370 386.144 370 395.723 370H644Z'
                stroke='black' stroke-width='6' mask='url(#path-5-inside-3_1245:6288)' />
        </svg>
      </div>
    </div>
    <div class='big-text-block'>
      <translate-wrapper start='center'>
        <div>We offer <span>individual solutions<s-line line='highlight-4' class='line-4'/></span> based on our practical experience
          and
          constantly developing
          knowledge. For each client, we are looking for <span>the only true<s-line line='highlight-5' class='line-5'/></span> and
          <span>profitable solution.<s-line line='highlight-6' class='line-6'/></span>
        </div>
      </translate-wrapper>
    </div>
    <div class='block-4'>
      <div ref='circleWow' class='circle-list circle-list2'>
        <div class='circle-item' />
        <div class='circle-item' />
        <div class='circle-item' />
        <div class='circle-item' />
        <div class='circle-item' />
        <div class='circle-item' />
        <div class='circle-item'>
          <div class='inner-circle'></div>
          <div ref='greenCircle' class='circle'></div>
        </div>

      </div>
      <div ref='wowFactor' class='wow-factor'>
        <h3>When you work with Archimatika, you can count on a team of digital experts who understand your needs in a
          way generic agencies can't replicate.</h3>
      </div>
    </div>
    <s-animation name='slide' :count-item='6' color='blue'>
      <template #item>
        <div class='card'>
          <h3>
            We turn investments into profit via Interactive visualization.
          </h3>
          <s-button color='blue' @click='openDiscuss'>Let’s work together!</s-button>
        </div>
      </template>
    </s-animation>
  </div>
</template>
<script>
import SButton from '../../components/ui/SButton'
import PTitle from '../../components/Products/PTitle'
import PHero from '../../components/Products/PHero'
import PIcons from '../../components/Products/PIcons'
import PCard from '../../components/Products/PCard'
import SAnimation from '../../components/SAnimation/SAnimation'
import TranslateWrapper from '../../components/TranslateWrapper'
import SLine from '../../components/SLine'

export default {
  components: {
    PCard,
    PIcons,
    PHero,
    PTitle,
    SButton,
    SAnimation,
    TranslateWrapper,
    SLine
  },
  data() {
    return {
      tlSkewed: null,
      tlSpinner: null,
      tlSmallImage: null,
      tlBublik: null,
      tlRupor: null,
      contentIcon: [
        { title: 'Virtual<br>property<br> tours:', id: 1001 },
        {
          img: require('~/assets/images/products/real-estate/fear.svg'),
          text: 'Allay the fear and excitement of property buying',
          id: 1002
        },
        {
          img: require('~/assets/images/products/real-estate/shorten.svg'),
          text: 'Shorten the decision cycle',
          id: 1003
        },
        {
          img: require('~/assets/images/products/real-estate/leads.svg'),
          text: 'Turn leads into appointments',
          id: 1004
        }, {
          img: require('~/assets/images/products/real-estate/capital.svg'),
          text: 'Bring capital',
          id: 1005
        },
        {
          img: require('~/assets/images/products/real-estate/sales-plan.svg'),
          text: 'Keep up with your sales plans',
          id: 1006
        }
      ]
    }
  },
  computed: {
    mobile() {
      return this.$store.state.mobile
    }
  },
  mounted() {
    this.animateSkew()
    this.animateSpinner()
    this.animateSmallImage()
    this.animateBublik()
    this.animateRupor()
    setTimeout(() => {
      const tlArr = [this.tlSkewed, this.tlSpinner, this.tlSmallImage, this.tlBublik, this.tlRupor]
      for (const item of tlArr) {
        item.scrollTrigger.refresh()
      }
    }, 200)
  },
  methods: {
    animateSkew() {
      if (process.client) {
        this.tlSkewed = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.skewedImage,
            start: 'center bottom'
          }
        })
        this.tlSkewed
          .from(this.$refs.skewedImage.querySelectorAll('.skewed'), {
            x: '-20%',
            opacity: 0,
            stagger: 0.2,
            duration: 2,
            clearProps: 'all'
          })
          .from([this.$refs.skewedImage.querySelector('.text').querySelector('h3'), this.$refs.skewedImage.querySelector('.text').querySelectorAll('h5')], {
            x: '-30%',
            opacity: 0,
            stagger: 0.2,
            duration: this.mobile ? 1: 2,
            clearProps: 'all'
          }, `<${this.mobile ? 0 : 1}`)
          .from([this.$refs.skewedImage.querySelector('.image')], {
            y: '30%',
            opacity: 0,
            stagger: 0.2,
            duration: 2,
            clearProps: 'all'
          }, '<')
      }
    },
    animateSpinner() {
      if (process.client) {
        const circles = [document.querySelector('#smallCircle'), document.querySelector('#mediumCircle'), document.querySelector('#innerCircle'), document.querySelector('#bigCircle')]
        const arrows = document.querySelector('#arrows')
        const texts = document.querySelectorAll('.textSvg')
        this.tlSpinner = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.spinnerBlock,
            start: 'center bottom'
          }
        })
        this.tlSpinner
          .from(circles, {
            opacity: 0,
            duration: 1.5,
            transformOrigin: 'center',
            scale: 0
          })
          .from(texts, {
            opacity: 0,
            duration: 1.5,
            x(index) {
              return index === 0 ? '-50%' : index === 1 ? '20%' : '20%'
            },
            y(index) {
              return index === 0 ? '0%' : index === 1 ? '20%' : '-20%'
            }
          }, '<0.9')
          .from(arrows, {
            opacity: 0,
            duration: 1,
            y: '-20%',
            transformOrigin: 'center',
            scale: 0
          }, '<0.2')

      }
    },
    animateSmallImage() {
      if (process.client) {
        const paths = this.$refs.smallImageBlock.querySelectorAll('path')
        const rects = this.$refs.smallImageBlock.querySelectorAll('rect')
        this.tlSmallImage = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.smallImageBlock,
            start: 'center bottom'
          }
        })
        this.tlSmallImage
          .from(rects, {
            stagger(index) {
              if (index < 3) {
                return index * 0.2
              } else if (index > 2) {
                return (index - 1) * 0.2
              }
            },
            opacity: 0,
            scale: 0,
            transformOrigin: 'center',
            duration: 1.5
          })
          .from(paths, {
            opacity: 0,
            stagger: 0.2,
            duration: 1.5
          }, '<0.6')
      }
    },
    animateBublik() {
      if (process.client) {
        const bubliks = this.$refs.bublik.querySelectorAll('.bubliks')
        const radials = this.$refs.bublik.querySelectorAll('.radials')
        this.tlBublik = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.bublik,
            start: 'center bottom'
          }
        })
        this.tlBublik.from(radials, {
          duration: 2,
          stagger: 0.2,
          opacity: 0,
          rotate(index) {
            if (index === 0) {
              return '-20deg'
            } else if (index === 1) {
              return '-50deg'
            } else if (index === 2) {
              return '-80deg'
            }
          },
          transformOrigin: 'center'
        })
          .from(bubliks, {
            opacity: 0,
            duration: 2,
            stagger: 0.4
          }, '<0.6')
      }
    },
    animateRupor() {
      if (process.client) {
        const circles = document.querySelector('.circle-list2').querySelectorAll('.circle-item')
        this.tlRupor = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.circleWow,
            start: 'center bottom'
          }
        })
        this.tlRupor.from(circles, {
          scale: 0,
          opacity: 0,
          duration: 1.5
        })
          .to(this.$refs.greenCircle, {
            left: '100%',
            duration: 2.5
          }, '<1')
          .from(this.$refs.wowFactor, {
            x: '-20%',
            opacity: 0,
            duration: 1.5
          }, '<')
      }
    },
    openDiscuss() {
      this.$store.dispatch('setDiscuss', true)
    }
  }
}
</script>
<style lang='scss' scoped>
.image-text-skewed {
  position: relative;
  margin-bottom: 255px;
  @media (max-width: 1120px) {
    margin-bottom: 114px;
  }
  @media (max-width: 600px) {
    margin-bottom: 125px;
  }
  .inside {
    padding-left: 130px;
    display: flex;
    width: calc(100% - 100px);
    padding-top: 95px;
    padding-bottom: 115px;
    position: relative;
    z-index: 10;
    @media (max-width: 1680px) and (min-width: 1367px) {
      padding-left: 92px;
      padding-top: 68px;
    }
    @media (max-width: 1366px) {
      padding-left: 92px;
      padding-top: 68px;
    }
    @media (max-width: 1120px) {
      padding: 0;
      width: 100%;
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }

    .text {
      max-width: 480px;
      @media (max-width: 1680px) and (min-width: 1367px) {
        max-width: calc(50% - 10px);
      }
      @media (max-width: 1366px) {
        max-width: 438px;
      }
      @media (max-width: 1120px) {
        max-width: 50%;
      }
      @media (max-width: 600px) {
        max-width: 100%;
      }


      h3 {
        margin-bottom: 50px;
        @media (max-width: 1366px) {
          font-size: 32px;
          line-height: 40px;
          max-width: 380px;

        }
        @media (max-width: 1120px) {
          max-width:  calc(200% - 110px);
          width: 200%;
        }
        @media (max-width: 600px) {
          width: 100%;
          max-width: 100%;
        }
      }

      h5:nth-child(2) {
        margin-bottom: 30px;
      }
      h5 {
        @media (max-width: 1366px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    .image {
      display: flex;
      align-items: flex-end;
      margin-left: 40px;
      margin-bottom: 23px;
      @media (max-width: 1680px) and (min-width: 1367px) {
        align-items: center;
        max-width: calc(50% - 10px);
      }
      @media (max-width: 1120px) {
        max-width: 50%;
        margin-left: 0;
        margin-bottom: 0;
        padding-top: 60px;
      }
      @media (max-width: 1024px) {
        padding-top: 0;
      }
      @media (max-width: 600px) {
        max-width: 100%;
        margin-top: 50px;
      }
    }
  }

  .skewed {
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    @media (max-width: 1120px) {
      display: none;
    }
    &.skewed-4x {
      z-index: 8;
      width: calc(100% - 130px);
      height: calc(100% - 4px);
      top: 0;
      left: 0;
      background-image: url('~assets/images/products/real-estate/skew4x.svg');
      @media (max-width: 1680px) {
        width: calc(100% - 72px);
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &.skewed-3x {
      z-index: 7;
      width: calc(100% - 180px);
      height: calc(100% - 190px);
      top: 95px;
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew3x.svg');
      @media (max-width: 1680px) {
        width: calc(100% - 108px);
        top: 50%;
        transform: translateY(-50%);
        left: 65px;
      }
      @media (max-width: 1366px) {
        height: calc(100% - 138px);
      }
    }

    &.skewed-2x {
      z-index: 6;
      width: calc(100% - 150px);
      height: calc(100% - 290px);
      top: 50%;
      transform: translateY(-50%);
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew2x.svg');
      @media (max-width: 1680px) {
        width: calc(100% - 87px);
        top: 50%;
        transform: translateY(-50%);
        left: 65px;
      }
      @media (max-width: 1366px) {
        height: calc(100% - 210px);
      }
    }

    &.skewed-1x {
      z-index: 5;
      width: calc(100% - 130px);
      height: calc(100% - 340px);
      top: 50%;
      transform: translateY(-50%);
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew1x.svg');
      @media (max-width: 1680px) {
        width: calc(100% - 72px);
        top: 50%;
        transform: translateY(-50%);
        left: 65px;
      }
      @media (max-width: 1366px) {
        height: calc(100% - 246px);
      }
    }

    &.skewed-0x {
      z-index: 4;
      width: calc(100% - 120px);
      height: calc(100% - 390px);
      top: 50%;
      transform: translateY(-50%);
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew0x.svg');
      @media (max-width: 1680px)  {
        width: calc(100% - 65px);
        top: 50%;
        transform: translateY(-50%);
        left: 65px;
      }
      @media (max-width: 1366px) {
        height: calc(100% - 282px);
      }
    }
  }
}

.small-big-text {
  max-width: 1130px;
  margin-bottom: 184px;
  @media (max-width: 1366px) {
    max-width: 897px;
    margin-bottom: 100px;
  }
  @media (max-width: 1120px) {
    max-width: 496px;
  }

  h4 {
    margin-bottom: 30px;
    max-width: 1130px;
  }
}

.block-heading {
  margin-bottom: 180px;
  @media (max-width: 1120px) {
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    margin-bottom: 100px;
  }

  h2 {
    margin-bottom: 50px;
  }

  h4 {
    max-width: 740px;
  }
}

.big-image-text-block {
  width: 100%;
  position: relative;
  margin-bottom: 200px;
  @media (max-width: 1366px) {
    margin-bottom: 100px;
  }

  .text {
    max-width: 740px;
    @media (max-width: 1680px) {
      max-width: 622px;
    }
    @media (max-width: 1120px) {
      max-width: 50%;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }

    h2, h4 {
      margin-bottom: 50px;

    }

    h4 {
      @media (max-width: 1680px) {
        margin-bottom: 20px;
      }
      @media (max-width: 1366px) {
        &.smaller {
          font-size: 23px;
          font-weight: 400;
          line-height: 30px;
        }
      }
      @media (max-width: 600px) {
        margin-bottom: 88vw;
        &.smaller {
          margin-bottom: 20px;
        }
      }
    }
    h5 {
      @media (max-width: 1366px) {
        font-size: 16px;
        line-height: 24px;

      }
    }
  }

  .image {
    position: absolute;
    top: 40px;
    right: 0;
    width: 830px;
    z-index: -1;
    @media (max-width: 1366px) {
      right: -140px;
      top: -40px;
    }
    @media (max-width: 1120px) {
      width: 70%;
      right: -10%;
    }
    @media (max-width: 600px) {
      width: 120%;
      top: 170px;
    }
    @media (max-width: 500px) {
      top: 250px;
    }
    @media (max-width: 385px) {
      top: 285px;
    }
    @media (max-width: 354px) {
      top: 310px;
    }
  }
}

.small-image-text-block {
  display: flex;
  margin-bottom: 200px;
  @media (max-width: 1366px) {
    margin-bottom: 50px;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-bottom: 100px;
  }
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
  .image {
    @media (max-width: 1024px) {
      max-width: 70%;
      margin-top: 30px;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 610px;
    margin-left: 50px;
    @media (max-width: 1366px) {
      max-width: calc(50% - 10px);
      margin-left: 20px;
      align-items: flex-start;
    }
    @media (max-width: 600px) {
      max-width: 100%;
      margin-left: 0;
    }

    h3 {
      margin-bottom: 50px;
      @media (max-width: 1366px) {
        font-size: 32px;
        line-height: 40px;
      }
    }
    h4 {
      @media (max-width: 1366px) {
        font-size: 23px;
        line-height: 30px;
        font-weight: 400;
      }
    }
  }
}

.medium-image-text-block {
  display: flex;
  margin-bottom: 250px;
  position: relative;
  @media (max-width: 1366px) {
    margin-bottom: 113px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 139px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 100px;
  }
  .text {
    max-width: 740px;
    margin-right: 40px;
    @media (max-width: 1680px) {
      max-width: 610px;
    }
    @media (max-width: 1120px) {
      max-width: calc(50% - 10px);
      margin-right: 20px;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }

    h2 {
      margin-bottom: 50px;
      @media (max-width: 600px) {
        margin-bottom: 90vw;
      }
    }

    ul {
      list-style: initial;
      margin-left: 30px;

      li {
        @include h4_desc();
        max-width: 610px;
        margin-bottom: 30px;
        position: relative;
        @media (max-width: 600px) {
          max-width: 100%;
        }

        &:last-child {
          margin-bottom: 0;
          padding-bottom: 20px;
        }

        span {
          position: relative;

          .s-svg {
            position: absolute;
            left: -12%;
            top: 50%;
            transform: translateY(-50%) translateX(5%);
            z-index: -1;
          }
        }
      }
    }
  }

  .image {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    @media (max-width: 1680px) {
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 1366px) {
      width: 430px;
      svg {
        max-width: 530px;
        width: 530px;
        height: 530px;
        position: absolute;
      }
    }
    @media (max-width: 1120px) {
      width: calc(50% - 10px);
      position: relative;
      svg {
        width: 100%;
      }
    }
    @media (max-width: 600px) {
      width: 100%;
      justify-content: flex-start;
      position: absolute;
      max-width: 100%;
      height: 100vw;
      top: 90px;
      svg {
        max-width: 100%;
      }
    }
  }
}

.big-text-block {
  margin-bottom: 154px;
  @media (max-width: 1366px) {
    margin-bottom: 106px;
  }

  div {
    font-family: 'Stolzl Display', sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 83px;
    letter-spacing: -0.065em;
    text-align: center;
    position: relative;
    @media (max-width: 1120px) {
      font-size: 44px;
      line-height: 57.2px;
    }
    @media (max-width: 600px) {
      font-size: 32px;
      line-height: 42px;
    }


    span {
      font-family: Gilroy, sans-serif;
      font-size: 64px;
      font-style: italic;
      font-weight: 600;
      line-height: 83px;
      letter-spacing: -0.065em;
      text-align: center;
      text-transform: capitalize;
      position: relative;
      @media (max-width: 1120px) {
        font-size: 44px;
        line-height: 57.2px;
      }
      @media (max-width: 600px) {
        font-size: 32px;
        line-height: 42px;
      }

      .s-svg {
        position: absolute;
        left: -12%;
        top: 50%;
        transform: translateY(-50%) translateX(5%);
        z-index: -1;
        &.line-4 {
          transform: translateY(-50%) translateX(10%);
        }
        &.line-5 {
          transform: translateY(-50%) translateX(10%);
        }
      }
    }
  }
}

.block-4 {
  position: relative;
  margin-bottom: 200px;
  @media (max-width: 1366px) {
    margin-bottom: 102px;
  }

  .wow-factor {
    max-width: 870px;
    position: absolute;
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 1366px) {
      right: 0;
    }

    h3 {
      max-width: 610px;
      @media (max-width: 1366px) {
        max-width: 530px;
        font-size: 32px;
        line-height: 40px;
      }
      @media (max-width: 1120px) {
        font-size: 20px;
        line-height: 1.25;
        max-width: 50%;
        margin-left: auto;
      }
      @media (max-width: 600px) {
        max-width: 240px;
      }
    }
  }

  .circle-list {
    position: relative;
    height: 775px;
    right: 0;
    @media (max-width: 1366px) {
      height: 577px;
      width: 805px;
    }
    @media (max-width: 1120px) {
      height: 461px;
      width: 495px;
    }
    @media (max-width: 600px) {
      height: 461px;
      width: 100vw;
      margin-left: -24px;
      overflow: hidden;
      padding-left: 24px;
    }

    .circle-item {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border: 3px solid $black;
      border-radius: 50%;
      width: 642px;
      height: 100%;
      background-color: $white;
      @media (max-width: 1366px) {
        width: 478px;
      }
      @media (max-width: 1120px) {
        width: 295px;
      }
      @media (max-width: 600px) {
        width: 382px;
      }

      &:nth-child(1) {
        transform: translateY(-50%) scale(0.17);
        left: -232px;
        @media (max-width: 1366px) {
          left: -145px;
        }
        @media (max-width: 1120px) {
          left: -100px;
        }
        @media (max-width: 600px) {
          left: -305px;
        }
      }

      &:nth-child(2) {
        transform: translateY(-50%) scale(0.25);
        left: -160px;
        @media (max-width: 1366px) {
          left: -93px;
        }
        @media (max-width: 1120px) {
          left: -77px;
        }
        @media (max-width: 600px) {
          left: -265px;
        }
      }

      &:nth-child(3) {
        transform: translateY(-50%) scale(0.35);
        left: -70px;
        @media (max-width: 1366px) {
          left: -29px;
        }
        @media (max-width: 1120px) {
          left: -44px;
        }
        @media (max-width: 600px) {
          left: -220px;
        }
      }

      &:nth-child(4) {
        transform: translateY(-50%) scale(0.5);
        left: 40px;
        @media (max-width: 1366px) {
          left: 58px;
        }
        @media (max-width: 1120px) {
          left: 4px;
        }
        @media (max-width: 600px) {
          left: -165px;
        }
      }

      &:nth-child(5) {
        transform: translateY(-50%) scale(0.67);
        left: 150px;
        @media (max-width: 1120px) {
          left: 60px;
        }
        @media (max-width: 600px) {
          left: -95px;
        }

      }

      &:nth-child(6) {
        transform: translateY(-50%) scale(0.85);
        left: 300px;
        @media (max-width: 1366px) {
          left: 235px;
        }
        @media (max-width: 1120px) {
          left: 125px;
        }
        @media (max-width: 600px) {
          left: -25px;
        }
      }

      &:nth-child(7) {
        transform: translateY(-50%) scale(1);
        left: 440px;
        overflow: hidden;
        border: 0;
        background: transparent;
        width: calc(100vw - 440px);
        height: 769px;
        border-radius: 0;
        @media (max-width: 1366px) {
          left: 326px;
          height: 577px;
          width: calc(100vw - 326px);
        }
        @media (max-width: 1120px) {
          height: 461px;
          left: 190px;
          width: calc(200vw - 326px);
        }
        @media (max-width: 600px) {
          height: 461px;
          left: 55px;
        }
      }

      .circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        background: $blue;
        top: 50%;
        left: -200px;
        transform: translateY(-50%);
        @media (max-width: 1120px) {
          width: 150px;
          height: 150px;
        }
      }

      .inner-circle {
        left: 0;
        top: 0;
        border: 3px solid $black;
        border-radius: 50%;
        width: 642px;
        height: 100%;
        background-color: $white;
        @media (max-width: 1366px) {
          width: 478px;
        }
        @media (max-width: 1120px) {
          width: 295px;
        }
        @media (max-width: 600px) {
          width: 382px;
        }
      }
    }

  }
}

</style>


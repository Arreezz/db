document.addEventListener('DOMContentLoaded', () => {
    const dashboardView = document.getElementById('dashboard-view');
    const addUserView = document.getElementById('add-user-view');
    const usersView = document.getElementById('users-view');
    const ordersView = document.getElementById('orders-view');
    const accountingView = document.getElementById('accounting-view');
    const chinaView = document.getElementById('china-view');
    const chinaAccountingView = document.getElementById('china-accounting-view');
    const worldAccountingView = document.getElementById('world-accounting-view');
    const restOfWorldView = document.getElementById('rest-of-world-view');
    const rotwAccountingView = document.getElementById('rotw-accounting-view');
    const expensesView = document.getElementById('expenses-view');
    const totalExpensesView = document.getElementById('total-expenses-view');
    const paymentReceiptsView = document.getElementById('payment-receipts-view');

    const userModal = document.getElementById('user-modal');
    const modalTitle = document.getElementById('modal-title');
    const openModalBtn = document.getElementById('open-modal-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    
    const addUserLink = document.getElementById('add-users-link');
    const backToDashboardBtn = document.getElementById('back-to-dashboard');
    
    const userForm = document.getElementById('add-user-form');
    const formSubmitBtn = document.getElementById('form-submit-btn');
    const userTableBody = document.getElementById('user-table-body');
    const editUserCodeInput = document.getElementById('edit-user-code');
    const manageUsersSearchInput = document.getElementById('manage-users-search');

    const usersBackBtn = document.getElementById('users-back');
    const usersSearchInput = document.getElementById('users-search');
    const usersTableBody2 = document.getElementById('users-table-body');
    const usersNavLink = document.querySelector('.nav-link[data-message="Users"]');
    const accountingNavLink = document.querySelector('.nav-link[data-message="Accounting"]');
    const chinaNavLink = document.querySelector('.nav-link[data-message="China"]');
    const chinaAccountingNavLink = document.querySelector('.nav-link[data-message="China-Accounting"]');
    const worldAccountingNavLink = document.querySelector('.nav-link[data-message="World-Accounting"]');
    const restOfWorldNavLink = document.querySelector('.nav-link[data-message="Rest-Of-The-World"]');
    const rotwAccountingNavLink = document.querySelector('.nav-link[data-message="R.O.T.W-Accounting"]');
    const expensesNavLink = document.querySelector('.nav-link[data-message="Expenses"]');
    const totalExpensesNavLink = document.querySelector('.nav-link[data-message="Total-Expenses"]');
    const paymentReceiptsNavLink = document.querySelector('.nav-link[data-message="Payment receipts"]');
    const usersOrdersBtn = document.getElementById('users-orders-btn');

    // World view elements
    const worldView = document.getElementById('world-view');
    const worldNavLink = document.querySelector('.nav-link[data-message="World"]');
    const worldBackBtn = document.getElementById('world-back');
    const worldAddBtn = document.getElementById('world-add-btn');
    const worldTableBody = document.getElementById('world-table-body');
    const worldModal = document.getElementById('world-modal');
    const worldModalTitle = document.getElementById('world-modal-title');
    const worldModalClose = document.getElementById('world-modal-close');
    const worldForm = document.getElementById('world-form');
    const worldEditIdxInput = document.getElementById('world-edit-idx');
    const worldSearchInput = document.getElementById('world-search');
    
    // Rest of the World elements
    const restOfWorldBackBtn = document.getElementById('rest-of-world-back');
    const rotwAddBtn = document.getElementById('rotw-add-btn');
    const rotwTableBody = document.getElementById('rest-of-world-table-body');
    const rotwModal = document.getElementById('rotw-modal');
    const rotwModalTitle = document.getElementById('rotw-modal-title');
    const rotwModalClose = document.getElementById('rotw-modal-close');
    const rotwForm = document.getElementById('rotw-form');
    const rotwCancelBtn = document.getElementById('rotw-cancel');
    const rotwSaveBtn = document.getElementById('rotw-save');
    const rotwSearchInput = document.getElementById('rotw-search');
    const rotwEditIdxInput = document.getElementById('rotw-edit-idx');


    // Image viewer modal elements
    const imageViewerModal = document.getElementById('image-viewer-modal');
    const imageViewerCloseBtn = document.getElementById('image-viewer-close');
    const viewerImage1 = document.getElementById('viewer-image1');
    const viewerImage2 = document.getElementById('viewer-image2');

    const userDetailsModal = document.getElementById('user-details-modal');
    const userDetailsCloseBtn = document.getElementById('user-details-close-btn');
    const detailsUserTitle = document.getElementById('details-user-title');
    const detailsCode = document.getElementById('details-code');
    const detailsName = document.getElementById('details-name');
    const detailsPhone1 = document.getElementById('details-phone1');
    const detailsPhone2 = document.getElementById('details-phone2');
    const detailsCity = document.getElementById('details-city');
    const detailsNeighborhood = document.getElementById('details-neighborhood');
    const detailsAddress = document.getElementById('details-address');
    const detailsClosePlace = document.getElementById('details-closeplace');
    const detailsOrdersBody = document.getElementById('details-orders-body');
    const addOrderForm = document.getElementById('add-order-form');
    const newOrderId = document.getElementById('new-order-id');
    const newOrderDate = document.getElementById('new-order-date');
    const newOrderAmount = document.getElementById('new-order-amount');
    const newOrderStatus = document.getElementById('new-order-status');

    const ordersBackBtn = document.getElementById('orders-back');
    const ordersTitle = document.getElementById('orders-title');
    const ordersUserCode = document.getElementById('orders-user-code');
    const ordersTableBody = document.getElementById('orders-table-body');
    const ordersSearchInput = document.getElementById('orders-search');
    const addOrderBtn = document.getElementById('add-order-btn');
    const orderModal = document.getElementById('order-modal');
    const orderModalTitle = document.getElementById('order-modal-title');
    const closeOrderModalBtn = document.getElementById('close-order-modal-btn');
    const orderForm = document.getElementById('order-form');
    const orderFullNameInput = document.getElementById('order-full-name');
    const orderDateInput = document.getElementById('order-date');
    const submitOrderBtn = document.getElementById('submit-order-btn');
    const orderCancelBtn = document.getElementById('order-cancel-btn');

    // Row Details modal wiring
    const rowDetailsModal = document.getElementById('row-details-modal');
    const rowDetailsBody = document.getElementById('row-details-body');
    const rowDetailsTitle = document.getElementById('row-details-modal-title');
    const rowDetailsClose = document.getElementById('row-details-close');
    const rowDetailsClose2 = document.getElementById('row-details-close-2');

    // Expenses View Elements
    const expensesBackBtn = document.getElementById('expenses-back');
    const openExpenseModalBtn = document.getElementById('open-expense-modal-btn');
    const expenseModal = document.getElementById('expense-modal');
    const expenseModalTitle = document.getElementById('expense-modal-title');
    const addExpenseForm = document.getElementById('add-expense-form');
    const cancelExpenseBtn = document.getElementById('cancel-expense-btn');
    const submitExpenseBtn = document.getElementById('submit-expense-btn');
    const expensesTableBody = document.getElementById('expenses-table-body');
    const editExpenseIdInput = document.getElementById('edit-expense-id');
    const expenseDateFrom = document.getElementById('expense-date-from');
    const expenseDateTo = document.getElementById('expense-date-to');
    const runExpenseAccountingBtn = document.getElementById('run-expense-accounting-btn');
    const expenseAccountingResults = document.getElementById('expense-accounting-results');
    const expenseAccountingTableBody = document.getElementById('expense-accounting-table-body');
    const closeAccountingSummaryBtn = document.getElementById('close-accounting-summary-btn');
    
    // Total Expenses View Elements
    const totalExpensesBackBtn = document.getElementById('total-expenses-back');
    const totalSummaryDateFrom = document.getElementById('total-summary-date-from');
    const totalSummaryDateTo = document.getElementById('total-summary-date-to');
    const totalSummaryClearFilters = document.getElementById('total-summary-clear-filters');
    const summaryTotalProfitOrders = document.getElementById('summary-total-profit-orders');
    const summaryTotalProfitChina = document.getElementById('summary-total-profit-china');
    const summaryTotalProfitWorld = document.getElementById('summary-total-profit-world');
    const summaryTotalProfitRotw = document.getElementById('summary-total-profit-rotw');
    const summaryTotalExpenses = document.getElementById('summary-total-expenses');
    const summaryNetTotal = document.getElementById('summary-net-total');

    // Payment Receipts View Elements (NEW)
    const paymentReceiptsBackBtn = document.getElementById('payment-receipts-back');
    const openPaymentReceiptModalBtn = document.getElementById('open-payment-receipt-modal-btn');
    const paymentReceiptModal = document.getElementById('payment-receipt-modal');
    const paymentReceiptModalTitle = document.getElementById('payment-receipt-modal-title');
    const paymentReceiptForm = document.getElementById('payment-receipt-form');
    const cancelPaymentReceiptBtn = document.getElementById('cancel-payment-receipt-btn');
    const submitPaymentReceiptBtn = document.getElementById('submit-payment-receipt-btn');
    const paymentReceiptsTableBody = document.getElementById('payment-receipts-table-body');
    const editReceiptIdInput = document.getElementById('edit-receipt-id');
    const printReceiptsBtn = document.getElementById('print-receipts-btn');
    
    // To store the data of the currently selected receipt for printing
    let selectedReceiptForPrint = null;

    // START: Order Form Calculation Logic
    const orderFormInputs = {
        allCost: document.getElementById('all-cost'),
        allWeight: document.getElementById('all-weight'),
        weight: document.getElementById('weight'),
        pPerKg: document.getElementById('p-per-kg'),
        shippingCost: document.getElementById('shipping-cost'),
        inShipCost: document.getElementById('in-ship-cost'),
        inShipping: document.getElementById('in-shipping'),
        purchesProf: document.getElementById('purches-prof'),
        moReceived: document.getElementById('mo-received'),
        totalProfit: document.getElementById('total-profit'),
        cashBack: document.getElementById('cash-back')
    };

    function calculateOrderValues() {
        const allCost = parseFloat(orderFormInputs.allCost.value) || 0;
        const allWeight = parseFloat(orderFormInputs.allWeight.value) || 0;
        const weight = parseFloat(orderFormInputs.weight.value) || 0;
        const pPerKg = parseFloat(orderFormInputs.pPerKg.value) || 0;
        const inShipping = parseFloat(orderFormInputs.inShipping.value) || 0;
        const inShipCost = parseFloat(orderFormInputs.inShipCost.value) || 0;
        const purchesProf = parseFloat(orderFormInputs.purchesProf.value) || 0;

        // 1. Calculate Shipping-Cost: (all-cost / all-weight) * weight
        let shippingCost = 0;
        if (allWeight > 0) {
            shippingCost = (allCost / allWeight) * weight;
        }
        orderFormInputs.shippingCost.value = shippingCost.toFixed(2);

        // 2. Calculate Mo-received: (weight * P-per kg) + in-shipping
        const moReceived = (weight * pPerKg) + inShipping;
        orderFormInputs.moReceived.value = moReceived.toFixed(2);

        // 3. Calculate Total-Profit: (weight * p-per kg) - (Shipping-Cost + in-shipping) + (purches prof - in-ship-cost)
        const totalProfit = (weight * pPerKg) - (shippingCost + inShipping) + (purchesProf - inShipCost);
        orderFormInputs.totalProfit.value = totalProfit.toFixed(2);

        // 4. Calculate Cash-Back: (Shipping-Cost * 0.10) - Total-Profit
        const cashBack = (shippingCost * 0.10) - totalProfit;
        orderFormInputs.cashBack.value = cashBack.toFixed(2);
    }

    const sourceInputIds = [
        'all-cost', 'all-weight', 'weight', 'p-per-kg',
        'in-shipping', 'in-ship-cost', 'purches-prof'
    ];

    sourceInputIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', calculateOrderValues);
        }
    });
    // END: Order Form Calculation Logic


    function openRowDetails(title, html) {
        if (rowDetailsTitle) rowDetailsTitle.textContent = title || 'Row Details';
        if (rowDetailsBody) rowDetailsBody.innerHTML = html || '';
        if (rowDetailsModal) {
            rowDetailsModal.classList.remove('invisible', 'opacity-0');
            const content = rowDetailsModal.querySelector('.modal-content');
            if (content) content.classList.remove('scale-95');
        }
    }
    function closeRowDetails() {
        if (rowDetailsModal) {
            rowDetailsModal.classList.add('invisible', 'opacity-0');
            const content = rowDetailsModal.querySelector('.modal-content');
            if (content) content.classList.add('scale-95');
        }
    }
    if (rowDetailsClose) rowDetailsClose.addEventListener('click', closeRowDetails);
    if (rowDetailsClose2) rowDetailsClose2.addEventListener('click', closeRowDetails);
    function buildRowDetails(headers, cells) {
        const pairs = headers.map((h, i) => [h, cells[i] || '']).filter(([h]) => h && h.toLowerCase() !== 'actions');
        const rows = pairs.map(([h, v]) => `<tr><th class="text-left pr-4 py-1 text-gray-300">${h}</th><td class="py-1 text-gray-100">${v}</td></tr>`).join('');
        return `<div class="overflow-auto"><table class="w-full">${rows}</table></div>`;
    }
    function attachRowDetailsTo(tbodyId, titlePrefix) {
        const tb = document.getElementById(tbodyId);
        if (!tb) return;
        tb.addEventListener('click', (e) => {
            const actionEl = e.target.closest('button, a');
            if (actionEl) return;
            const tr = e.target.closest('tr');
            if (!tr) return;
            const table = tr.closest('table');
            const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
            const cells = Array.from(tr.children).map(td => td.textContent.trim());
            const html = buildRowDetails(headers, cells);
            openRowDetails(titlePrefix || 'Row Details', html);
        });
    }
    // Enable for User Management, Orders, China
    attachRowDetailsTo('user-table-body', 'User Management Row');
    attachRowDetailsTo('orders-table-body', 'Order Row');
    attachRowDetailsTo('china-table-body', 'China Row');
    attachRowDetailsTo('world-table-body', 'World Shipment Row');
    attachRowDetailsTo('rest-of-world-table-body', 'Rest of World Row');


    // World data and handlers
    let worldStore = [];
    
    // Rest of the World data store
    let rotwStore = [];

    // Expenses data store
    let expensesStore = [];

    // Payment Receipts data store (NEW)
    let paymentReceiptsStore = [];

    // Helper to read file as Base64
    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve(null);
                return;
            }
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    function renderWorldTable(searchTerm = '') {
        if (!worldTableBody) return;
        const term = (searchTerm || '').toLowerCase().trim();
        worldTableBody.innerHTML = '';

        const filteredRows = worldStore
            .map((row, idx) => ({ row, originalIndex: idx })) // Keep track of original index
            .filter(({ row }) => {
                if (!term) return true;
                return (row.senderName || '').toLowerCase().includes(term);
            });

        filteredRows.forEach(({ row, originalIndex }) => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-800/40';
            tr.innerHTML = `
                <td class="table-cell">${row.senderName || ''}</td>
                <td class="table-cell">${row.senderNo || ''}</td>
                <td class="table-cell">${row.recipientName || ''}</td>
                <td class="table-cell">${row.recipientNo || ''}</td>
                <td class="table-cell">${row.recipientAddress || ''}</td>
                <td class="table-cell">${row.itemWeight ?? ''}</td>
                <td class="table-cell">${row.piece ?? ''}</td>
                <td class="table-cell">${row.itemType || ''}</td>
                <td class="table-cell">${row.shippingOnCustomer || ''}</td>
                <td class="table-cell">${row.shippingCost ?? ''}</td>
                <td class="table-cell">${row.transferChargeToCompany ?? ''}</td>
                <td class="table-cell">${row.senderCompanyName || ''}</td>
                <td class="table-cell">${row.finalProfit ?? ''}</td>
                <td class="table-cell">${row.totalPrice ?? ''}</td>
                <td class="table-cell">${row.remedy || ''}</td>
                <td class="table-cell">${row.date || ''}</td>
                <td class="table-cell text-center space-x-1">
                    <button class="world-view-images-btn px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-500" data-index="${originalIndex}" title="View Images" ${(!row.image1 && !row.image2) ? 'disabled' : ''}><i class="fas fa-images"></i></button>
                    <button class="world-edit-btn px-2 py-1 bg-amber-600 text-white rounded hover:bg-amber-500" data-index="${originalIndex}" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="world-delete-btn px-2 py-1 bg-red-600 text-white rounded hover:bg-red-500" data-index="${originalIndex}" title="Delete"><i class="fas fa-trash"></i></button>
                </td>`;
            worldTableBody.appendChild(tr);
        });

        const table = worldTableBody.closest('table');
        if (table && typeof makeTableSortable === 'function') makeTableSortable(table);
    }
    
    // Render Rest of the World Table
    function renderRotwTable(searchTerm = '') {
        if (!rotwTableBody) return;
        const term = (searchTerm || '').toLowerCase().trim();
        rotwTableBody.innerHTML = '';

        const filteredRows = rotwStore
            .map((row, idx) => ({ row, originalIndex: idx }))
            .filter(({ row }) => {
                if (!term) return true;
                const trackMatch = (row.trackNo || '').toLowerCase().includes(term);
                const nameMatch = (row.customerName || '').toLowerCase().includes(term);
                return trackMatch || nameMatch;
            });

        filteredRows.forEach(({ row, originalIndex }) => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-800/50';
            tr.dataset.index = originalIndex;
            tr.innerHTML = `
                <td class="table-cell">${row.trackNo || ''}</td>
                <td class="table-cell">${row.customerName || ''}</td>
                <td class="table-cell">${row.warehouseContact || ''}</td>
                <td class="table-cell">${row.customerNo || ''}</td>
                <td class="table-cell">${row.customerAddress || ''}</td>
                <td class="table-cell">${row.sellerName || ''}</td>
                <td class="table-cell">${row.platform || ''}</td>
                <td class="table-cell">${row.productLink || ''}</td>
                <td class="table-cell">${row.itemPrice || ''}</td>
                <td class="table-cell">${row.itemNo || ''}</td>
                <td class="table-cell">${row.shipment || ''}</td>
                <td class="table-cell">${row.fee || ''}</td>
                <td class="table-cell">${row.remedy || ''}</td>
                <td class="table-cell">${row.shipToKrd || ''}</td>
                <td class="table-cell">${row.totalPrice || ''}</td>
                <td class="table-cell">${row.payProf || ''}</td>
                <td class="table-cell">${row.buyProf || ''}</td>
                <td class="table-cell">${row.totalProf || ''}</td>
                <td class="table-cell">${row.date || ''}</td>
                <td class="table-cell text-center space-x-1">
                    <button class="rotw-open-link-btn px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-500" data-index="${originalIndex}" title="Open Product Link" ${!row.productLink ? 'disabled' : ''}><i class="fas fa-external-link-alt"></i></button>
                    <button class="rotw-edit-btn px-2 py-1 bg-amber-600 text-white rounded hover:bg-amber-500" data-index="${originalIndex}" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="rotw-delete-btn px-2 py-1 bg-red-600 text-white rounded hover:bg-red-500" data-index="${originalIndex}" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            rotwTableBody.appendChild(tr);
        });
        const table = rotwTableBody.closest('table');
        if (table) makeTableSortable(table);
    }


    function openWorldModal(data) {
        if (!worldModal) return;
        worldForm.reset();
        worldModalTitle.textContent = data ? 'Edit Shipment' : 'Add Shipment';
        worldEditIdxInput.value = (data && data.__idx != null) ? String(data.__idx) : '';
        
        const img1Preview = document.getElementById('world-image1-preview');
        const img2Preview = document.getElementById('world-image2-preview');
        const removeImg1Btn = document.getElementById('world-remove-image1-btn');
        const removeImg2Btn = document.getElementById('world-remove-image2-btn');

        img1Preview.classList.add('hidden');
        img2Preview.classList.add('hidden');
        removeImg1Btn.classList.add('hidden');
        removeImg2Btn.classList.add('hidden');
        img1Preview.src = '';
        img2Preview.src = '';
        // Clear file inputs
        document.getElementById('world-image1').value = '';
        document.getElementById('world-image2').value = '';


        const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v != null ? String(v) : ''; };
        setVal('world-senderName', data?.senderName);
        setVal('world-senderNo', data?.senderNo);
        setVal('world-recipientName', data?.recipientName);
        setVal('world-recipientNo', data?.recipientNo);
        setVal('world-recipientAddress', data?.recipientAddress);
        setVal('world-itemWeight', data?.itemWeight);
        setVal('world-piece', data?.piece);
        setVal('world-itemType', data?.itemType);
        setVal('world-shippingOnCustomer', data?.shippingOnCustomer);
        setVal('world-shippingCost', data?.shippingCost);
        setVal('world-transferChargeToCompany', data?.transferChargeToCompany);
        setVal('world-senderCompanyName', data?.senderCompanyName);
        setVal('world-finalProfit', data?.finalProfit);
        setVal('world-totalPrice', data?.totalPrice);
        setVal('world-remedy', data?.remedy);
        setVal('world-date', data?.date);
        
        if (data?.image1) {
            img1Preview.src = data.image1;
            img1Preview.classList.remove('hidden');
            removeImg1Btn.classList.remove('hidden');
        }
        if (data?.image2) {
            img2Preview.src = data.image2;
            img2Preview.classList.remove('hidden');
            removeImg2Btn.classList.remove('hidden');
        }

        // START: World Form Calculation Logic
        const worldFormInputs = {
            shippingOnCustomer: document.getElementById('world-shippingOnCustomer'),
            shippingCost: document.getElementById('world-shippingCost'),
            transferChargeToCompany: document.getElementById('world-transferChargeToCompany'),
            finalProfit: document.getElementById('world-finalProfit'),
            totalPrice: document.getElementById('world-totalPrice')
        };

        function calculateWorldValues() {
            const shippingOnCust = parseFloat(worldFormInputs.shippingOnCustomer.value) || 0;
            const shippingCost = parseFloat(worldFormInputs.shippingCost.value) || 0;
            const transferChrg = parseFloat(worldFormInputs.transferChargeToCompany.value) || 0;

            // 1. Final-Profit = Shipping-on-Cust - Shipping-Cost - Transfer-chrg-to-Comp
            const finalProfit = shippingOnCust - shippingCost - transferChrg;
            worldFormInputs.finalProfit.value = finalProfit.toFixed(2);

            // 2. Total-Price = Shipping-on-Cust + Transfer-chrg-to-Comp
            const totalPrice = shippingOnCust + transferChrg;
            worldFormInputs.totalPrice.value = totalPrice.toFixed(2);
        }

        const worldSourceInputIds = ['world-shippingOnCustomer', 'world-shippingCost', 'world-transferChargeToCompany'];
        worldSourceInputIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', calculateWorldValues);
            }
        });

        calculateWorldValues();
        // END: World Form Calculation Logic

        worldModal.classList.remove('invisible', 'opacity-0');
        const content = worldModal.querySelector('.modal-content');
        if (content) content.classList.remove('scale-95');
    }

    // Open/Close Rest of the World Modal
    function openRotwModal(data = null) {
        if (!rotwModal) return;
        rotwForm.reset();
        if (data) {
            rotwModalTitle.textContent = 'Edit Shipment';
            rotwEditIdxInput.value = data.originalIndex;
            // Populate form fields
            document.getElementById('rotw-trackNo').value = data.row.trackNo || '';
            document.getElementById('rotw-customerName').value = data.row.customerName || '';
            document.getElementById('rotw-warehouseContact').value = data.row.warehouseContact || '';
            document.getElementById('rotw-customerNo').value = data.row.customerNo || '';
            document.getElementById('rotw-customerAddress').value = data.row.customerAddress || '';
            document.getElementById('rotw-sellerName').value = data.row.sellerName || '';
            document.getElementById('rotw-platform').value = data.row.platform || '';
            document.getElementById('rotw-productLink').value = data.row.productLink || '';
            document.getElementById('rotw-itemPrice').value = data.row.itemPrice || '';
            document.getElementById('rotw-itemNo').value = data.row.itemNo || '';
            document.getElementById('rotw-shipment').value = data.row.shipment || '';
            document.getElementById('rotw-fee').value = data.row.fee || '';
            document.getElementById('rotw-remedy').value = data.row.remedy || '';
            document.getElementById('rotw-shipToKrd').value = data.row.shipToKrd || '';
            document.getElementById('rotw-totalPrice').value = data.row.totalPrice || '';
            document.getElementById('rotw-payProf').value = data.row.payProf || '';
            document.getElementById('rotw-buyProf').value = data.row.buyProf || '';
            document.getElementById('rotw-totalProf').value = data.row.totalProf || '';
            document.getElementById('rotw-date').value = data.row.date || '';
        } else {
            rotwModalTitle.textContent = 'Add New Shipment';
            rotwEditIdxInput.value = '';
        }

        // START: ROTW Form Calculation Logic
        const rotwFormInputs = {
            itemPrice: document.getElementById('rotw-itemPrice'),
            shipment: document.getElementById('rotw-shipment'),
            fee: document.getElementById('rotw-fee'),
            shipToKrd: document.getElementById('rotw-shipToKrd'),
            totalPrice: document.getElementById('rotw-totalPrice'),
            payProf: document.getElementById('rotw-payProf'),
            buyProf: document.getElementById('rotw-buyProf'),
            totalProf: document.getElementById('rotw-totalProf')
        };

        function calculateRotwValues() {
            const itemPrice = parseFloat(rotwFormInputs.itemPrice.value) || 0;
            const shipment = parseFloat(rotwFormInputs.shipment.value) || 0;
            const shipToKrd = parseFloat(rotwFormInputs.shipToKrd.value) || 0;
            const payProf = parseFloat(rotwFormInputs.payProf.value) || 0;
            const buyProf = parseFloat(rotwFormInputs.buyProf.value) || 0;

            // 1. Fee %3 = (Item-price + shipment) * 0.03
            const fee = (itemPrice + shipment) * 0.03;
            rotwFormInputs.fee.value = fee.toFixed(2);

            // 2. Total price = Item-price + shipment + Fee %3 + Ship-to-KRD
            const totalPrice = itemPrice + shipment + fee + shipToKrd;
            rotwFormInputs.totalPrice.value = totalPrice.toFixed(2);

            // 3. Total-Prof = Pay-prof + Buy-prof
            const totalProf = payProf + buyProf;
            rotwFormInputs.totalProf.value = totalProf.toFixed(2);
        }

        const rotwSourceInputIds = ['rotw-itemPrice', 'rotw-shipment', 'rotw-shipToKrd', 'rotw-payProf', 'rotw-buyProf'];
        rotwSourceInputIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', calculateRotwValues);
            }
        });

        calculateRotwValues();
        // END: ROTW Form Calculation Logic

        rotwModal.classList.remove('invisible', 'opacity-0');
        rotwModal.querySelector('.modal-content').classList.remove('scale-95');
        setBodyScroll(true);
    }
    
    function closeRotwModal() {
        if (!rotwModal) return;
        rotwModal.classList.add('invisible', 'opacity-0');
        rotwModal.querySelector('.modal-content').classList.add('scale-95');
        ensureBodyScroll();
    }


    function closeWorldModal() {
        if (!worldModal) return;
        worldModal.classList.add('invisible', 'opacity-0');
        const content = worldModal.querySelector('.modal-content');
        if (content) content.classList.add('scale-95');
        worldEditIdxInput.value = '';
        worldForm.reset();
    }
    if (worldModalClose) worldModalClose.addEventListener('click', closeWorldModal);
    const worldCancelBtn = document.getElementById('world-cancel');
    if (worldCancelBtn) worldCancelBtn.addEventListener('click', closeWorldModal);
    
    if (worldForm) worldForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const image1File = document.getElementById('world-image1').files[0];
        const image2File = document.getElementById('world-image2').files[0];

        const [image1Data, image2Data] = await Promise.all([
            readFileAsDataURL(image1File),
            readFileAsDataURL(image2File)
        ]);

        const editIdx = worldEditIdxInput.value !== '' ? parseInt(worldEditIdxInput.value) : null;
        
        const data = {
            senderName: document.getElementById('world-senderName').value.trim(),
            senderNo: document.getElementById('world-senderNo').value.trim(),
            recipientName: document.getElementById('world-recipientName').value.trim(),
            recipientNo: document.getElementById('world-recipientNo').value.trim(),
            recipientAddress: document.getElementById('world-recipientAddress').value.trim(),
            itemWeight: parseFloat(document.getElementById('world-itemWeight').value) || 0,
            piece: parseInt(document.getElementById('world-piece').value) || 0,
            itemType: document.getElementById('world-itemType').value.trim(),
            shippingOnCustomer: document.getElementById('world-shippingOnCustomer').value.trim(),
            shippingCost: parseFloat(document.getElementById('world-shippingCost').value) || 0,
            transferChargeToCompany: parseFloat(document.getElementById('world-transferChargeToCompany').value) || 0,
            senderCompanyName: document.getElementById('world-senderCompanyName').value.trim(),
            finalProfit: parseFloat(document.getElementById('world-finalProfit').value) || 0,
            totalPrice: parseFloat(document.getElementById('world-totalPrice').value) || 0,
            remedy: document.getElementById('world-remedy').value.trim(),
            date: document.getElementById('world-date').value,
            image1: image1Data,
            image2: image2Data,
        };

        if (editIdx != null && !isNaN(editIdx)) {
            // Preserve old images if new ones aren't uploaded and not removed
            const existingRecord = worldStore[editIdx];
            if (!data.image1) data.image1 = document.getElementById('world-image1-preview').src.startsWith('data:image') ? existingRecord.image1 : null;
            if (!data.image2) data.image2 = document.getElementById('world-image2-preview').src.startsWith('data:image') ? existingRecord.image2 : null;
            
            worldStore[editIdx] = data;
        } else {
            worldStore.push(data);
        }
        renderWorldTable(worldSearchInput.value);
        closeWorldModal();
    });

    // Image preview and removal logic
    function setupImageHandling(inputId, previewId, removeBtnId) {
        const input = document.getElementById(inputId);
        const preview = document.getElementById(previewId);
        const removeBtn = document.getElementById(removeBtnId);

        if (input) {
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        preview.src = event.target.result;
                        preview.classList.remove('hidden');
                        removeBtn.classList.remove('hidden');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                preview.src = '';
                preview.classList.add('hidden');
                removeBtn.classList.add('hidden');
                input.value = ''; // Clear the file input
            });
        }
    }

    setupImageHandling('world-image1', 'world-image1-preview', 'world-remove-image1-btn');
    setupImageHandling('world-image2', 'world-image2-preview', 'world-remove-image2-btn');


    if (worldAddBtn) worldAddBtn.addEventListener('click', () => openWorldModal(null));
    if (worldTableBody) worldTableBody.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.world-edit-btn');
        const delBtn = e.target.closest('.world-delete-btn');
        const viewImagesBtn = e.target.closest('.world-view-images-btn');

        const idx = editBtn ? parseInt(editBtn.dataset.index) : delBtn ? parseInt(delBtn.dataset.index) : viewImagesBtn ? parseInt(viewImagesBtn.dataset.index) : null;
        if (idx == null || isNaN(idx)) return;
        
        if (viewImagesBtn) {
            const row = worldStore[idx];
            openImageViewer(row.image1, row.image2);
        } else if (editBtn) {
            const row = { ...worldStore[idx], __idx: idx };
            openWorldModal(row);
        } else if (delBtn) {
            if (confirm('Delete this row?')) {
                worldStore.splice(idx, 1);
                renderWorldTable(worldSearchInput.value);
            }
        }
    });
    if (worldNavLink) worldNavLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (dashboardView) dashboardView.classList.add('hidden');
        [addUserView, usersView, ordersView, accountingView, chinaView, chinaAccountingView, worldAccountingView, restOfWorldView, rotwAccountingView, expensesView, totalExpensesView, paymentReceiptsView].forEach(v => v && v.classList.add('hidden'));
        if (worldView) {
            worldView.classList.remove('hidden');
            worldView.classList.add('fullscreen');
        }
        renderWorldTable();
    });
    if (worldBackBtn) worldBackBtn.addEventListener('click', () => {
        if (worldView) {
            worldView.classList.add('hidden');
            worldView.classList.remove('fullscreen');
        }
        if (dashboardView) dashboardView.classList.remove('hidden');
    });
    
    if (worldSearchInput) {
        worldSearchInput.addEventListener('input', () => {
            renderWorldTable(worldSearchInput.value);
        });
    }

    // Rest of the World Event Listeners
    if (rotwAddBtn) rotwAddBtn.addEventListener('click', () => openRotwModal());
    if (rotwModalClose) rotwModalClose.addEventListener('click', closeRotwModal);
    if (rotwCancelBtn) rotwCancelBtn.addEventListener('click', closeRotwModal);
    
    if (rotwForm) {
        rotwForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const editIdx = rotwEditIdxInput.value;
            const shipmentData = {
                trackNo: document.getElementById('rotw-trackNo').value.trim(),
                customerName: document.getElementById('rotw-customerName').value.trim(),
                warehouseContact: document.getElementById('rotw-warehouseContact').value.trim(),
                customerNo: document.getElementById('rotw-customerNo').value.trim(),
                customerAddress: document.getElementById('rotw-customerAddress').value.trim(),
                sellerName: document.getElementById('rotw-sellerName').value.trim(),
                platform: document.getElementById('rotw-platform').value.trim(),
                productLink: document.getElementById('rotw-productLink').value.trim(),
                itemPrice: document.getElementById('rotw-itemPrice').value,
                itemNo: document.getElementById('rotw-itemNo').value,
                shipment: document.getElementById('rotw-shipment').value,
                fee: document.getElementById('rotw-fee').value,
                remedy: document.getElementById('rotw-remedy').value.trim(),
                shipToKrd: document.getElementById('rotw-shipToKrd').value,
                totalPrice: document.getElementById('rotw-totalPrice').value,
                payProf: document.getElementById('rotw-payProf').value,
                buyProf: document.getElementById('rotw-buyProf').value,
                totalProf: document.getElementById('rotw-totalProf').value,
                date: document.getElementById('rotw-date').value,
            };

            if (editIdx !== '') {
                rotwStore[parseInt(editIdx)] = shipmentData;
                showNotification('Shipment updated successfully!', 'success');
            } else {
                rotwStore.push(shipmentData);
                showNotification('Shipment added successfully!', 'success');
            }

            renderRotwTable(rotwSearchInput.value);
            closeRotwModal();
        });
    }

    if (rotwTableBody) {
        rotwTableBody.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;

            const tr = button.closest('tr');
            const index = parseInt(tr.dataset.index);

            if (button.classList.contains('rotw-edit-btn')) {
                const data = { row: rotwStore[index], originalIndex: index };
                openRotwModal(data);
            } else if (button.classList.contains('rotw-delete-btn')) {
                if (confirm('Are you sure you want to delete this shipment?')) {
                    rotwStore.splice(index, 1);
                    renderRotwTable(rotwSearchInput.value);
                    showNotification('Shipment deleted.', 'error');
                }
            } else if (button.classList.contains('rotw-open-link-btn')) {
                const link = rotwStore[index].productLink;
                if (link) {
                    let url = link.trim();
                    if (!url.startsWith('http://') && !url.startsWith('https://')) {
                        url = 'http://' + url;
                    }
                    window.open(url, '_blank');
                }
            }
        });
    }

    if (rotwSearchInput) {
        rotwSearchInput.addEventListener('input', () => {
            renderRotwTable(rotwSearchInput.value);
        });
    }


    // Image Viewer Modal Functions
    function openImageViewer(img1Src, img2Src) {
        if (!imageViewerModal) return;
        viewerImage1.src = img1Src || 'https://placehold.co/600x400/374151/f9fafb?text=No+Image';
        viewerImage2.src = img2Src || 'https://placehold.co/600x400/374151/f9fafb?text=No+Image';
        imageViewerModal.classList.remove('invisible', 'opacity-0');
        imageViewerModal.querySelector('.modal-content').classList.remove('scale-95');
    }

    function closeImageViewer() {
        if (!imageViewerModal) return;
        imageViewerModal.classList.add('invisible', 'opacity-0');
        imageViewerModal.querySelector('.modal-content').classList.add('scale-95');
    }

    if (imageViewerCloseBtn) imageViewerCloseBtn.addEventListener('click', closeImageViewer);
    if (imageViewerModal) imageViewerModal.addEventListener('click', (e) => {
        if (e.target === imageViewerModal) closeImageViewer();
    });


    // Accounting elements
    const accountingBackBtn = document.getElementById('accounting-back');
    const acctDateFromInput = document.getElementById('acct-date-from');
    const acctDateToInput = document.getElementById('acct-date-to');
    const acctClearBtn = document.getElementById('acct-clear-filters');
    const acctSummaryBody = document.getElementById('acct-summary-body');
    const acctTotalWeight = document.getElementById('acct-total-weight');
    const acctTotalShipping = document.getElementById('acct-total-shipping');
    const acctTotalInShipping = document.getElementById('acct-total-inshipping');
    const acctTotalPurches = document.getElementById('acct-total-purches');
    const acctTotalMoReceived = document.getElementById('acct-total-moreceived');
    const acctTotalProfit = document.getElementById('acct-total-profit');
    
    // China view elements
    const chinaBackBtn = document.getElementById('china-back');
    const chinaAddBtn = document.getElementById('china-add-btn');
    const chinaTableBody = document.getElementById('china-table-body');
    const chinaSearchInput = document.getElementById('china-search');
    const chinaDraftsBtn = document.getElementById('china-drafts-btn');
    const chinaModal = document.getElementById('china-modal');
    const chinaModalBody = document.getElementById('china-modal-body');
    const chinaModalCloseBtn = document.getElementById('china-modal-close-btn');
    const chinaModalCancelBtn = document.getElementById('china-modal-cancel');
    const chinaModalSaveBtn = document.getElementById('china-modal-save');
    // China Accounting elements
    const chinaAcctBackBtn = document.getElementById('china-acct-back');
    const chinaAcctDateFromInput = document.getElementById('china-acct-date-from');
    const chinaAcctDateToInput = document.getElementById('china-acct-date-to');
    const chinaAcctClearBtn = document.getElementById('china-acct-clear-filters');
    const chinaAcctBody = document.getElementById('china-acct-body');
    const chinaAcctTotals = {
        itemPrice: document.getElementById('china-acct-total-itemprice'),
        shipping: document.getElementById('china-acct-total-shipping'),
        chinaTotal: document.getElementById('china-acct-total-china'),
        cbm: document.getElementById('china-acct-total-cbm'),
        kg: document.getElementById('china-acct-total-kg'),
        totalPrice: document.getElementById('china-acct-total-totalprice'),
        payProf: document.getElementById('china-acct-total-payprof'),
        buyProf: document.getElementById('china-acct-total-buyprof'),
        totalProf: document.getElementById('china-acct-total-totalprof'),
    };

    // World Accounting Elements
    const worldAcctBackBtn = document.getElementById('world-acct-back');
    const worldAcctDateFromInput = document.getElementById('world-acct-date-from');
    const worldAcctDateToInput = document.getElementById('world-acct-date-to');
    const worldAcctClearBtn = document.getElementById('world-acct-clear-filters');
    const worldAcctBody = document.getElementById('world-acct-body');
    const worldAcctTotals = {
        weight: document.getElementById('world-acct-total-weight'),
        shippingOnCust: document.getElementById('world-acct-total-shippingoncust'),
        shippingCost: document.getElementById('world-acct-total-shippingcost'),
        transferCharge: document.getElementById('world-acct-total-transfercharge'),
        finalProfit: document.getElementById('world-acct-total-finalprofit'),
        totalPrice: document.getElementById('world-acct-total-totalprice'),
        remedy: document.getElementById('world-acct-total-remedy'),
    };
    
    // ROTW Accounting Elements
    const rotwAcctBackBtn = document.getElementById('rotw-acct-back');
    const rotwAcctDateFromInput = document.getElementById('rotw-acct-date-from');
    const rotwAcctDateToInput = document.getElementById('rotw-acct-date-to');
    const rotwAcctClearBtn = document.getElementById('rotw-acct-clear-filters');
    const rotwAcctBody = document.getElementById('rotw-acct-body');
    const rotwAcctTotals = {
        itemPrice: document.getElementById('rotw-acct-total-itemprice'),
        remedy: document.getElementById('rotw-acct-total-remedy'),
        shipToKrd: document.getElementById('rotw-acct-total-shiptokrd'),
        totalPrice: document.getElementById('rotw-acct-total-totalprice'),
        payProf: document.getElementById('rotw-acct-total-payprof'),
        buyProf: document.getElementById('rotw-acct-total-buyprof'),
        totalProf: document.getElementById('rotw-acct-total-totalprof'),
    };


    const draftsModal = document.getElementById('drafts-modal');
    const draftsModalBody = document.getElementById('drafts-modal-body');
    const draftsModalCloseBtn = document.getElementById('drafts-modal-close-btn');
    const draftsModalCancelBtn = document.getElementById('drafts-modal-cancel');
    const newDraftBtn = document.getElementById('new-draft-btn');
    const draftsViewModal = document.getElementById('drafts-view-modal');
    const draftsViewModalBody = document.getElementById('drafts-view-modal-body');
    const draftsViewModalCloseBtn = document.getElementById('drafts-view-modal-close-btn');
    const draftsViewModalCancelBtn = document.getElementById('drafts-view-modal-cancel');

    let chinaStore = [];
    let draftsStore = [];
    let chinaEditIdx = null; // null means add mode; number means edit index
    let draftEditIdx = null; // same for drafts
    let chinaSaveTarget = 'china'; // 'china' | 'draft'

    
    const chinaFields = [
        'trackNo','customerName','warehouseContact','customerNo','customerAddress','sellerName','platform','productLink','itemPrice','itemNo','chinaShipping','feePercent3',
        'chinaTotalPrice','cbm','cbmPrice','cbmShippingPrice','kg','kgPrice','kgShippingPrice','totalPrice','payProf','buyProf','totalProf','remedy','transportCompanyName','date'
    ];

    
    const chinaLabels = [
        'Track-NO','Cus-NAME','Wh-cont-us','Cust-No.','Cust-adrss','Seller-Name','Platform','Product-link','Item-price','Item No-','China-Ship','Fee %3',
        'China-tot-pri','CBM','CBM-PRI','CBM-ship-pri','KG','KG-price','KG-ship-pri','Total price','Pay-prof','Buy-prof','Total-Prof','Remedy','tran-comp-Name','Date'
    ];

    let chinaPendingData = null;
    const buildChinaFormHTML = (data = {}) => {
        let rows = '';
        chinaFields.forEach((key, idx) => {
            const label = chinaLabels[idx] || key;
            const type = key === 'date' ? 'date' : 'text';
            const value = data[key] ? String(data[key]) : '';
            rows += `<tr><th class="text-left pr-4 py-1 text-gray-300">${label}</th><td class="py-1"><input id="china-modal-${key}" type="${type}" class="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white" value="${value}"></td></tr>`;
        });
        return `<div class="overflow-auto"><table class="w-full">${rows}</table></div>`;
    };
    const openChinaModal = (data) => {
        if (!chinaModal) return;
        chinaModalBody.innerHTML = buildChinaFormHTML(data);

        // START: China Form Calculation Logic
        const chinaFormInputs = {
            itemPrice: document.getElementById('china-modal-itemPrice'),
            chinaShipping: document.getElementById('china-modal-chinaShipping'),
            feePercent3: document.getElementById('china-modal-feePercent3'),
            chinaTotalPrice: document.getElementById('china-modal-chinaTotalPrice'),
            cbm: document.getElementById('china-modal-cbm'),
            cbmPrice: document.getElementById('china-modal-cbmPrice'),
            cbmShippingPrice: document.getElementById('china-modal-cbmShippingPrice'),
            kg: document.getElementById('china-modal-kg'),
            kgPrice: document.getElementById('china-modal-kgPrice'),
            kgShippingPrice: document.getElementById('china-modal-kgShippingPrice'),
            totalPrice: document.getElementById('china-modal-totalPrice'),
            payProf: document.getElementById('china-modal-payProf'),
            buyProf: document.getElementById('china-modal-buyProf'),
            totalProf: document.getElementById('china-modal-totalProf')
        };

        function calculateChinaValues() {
            const itemPrice = parseFloat(chinaFormInputs.itemPrice.value) || 0;
            const chinaShipping = parseFloat(chinaFormInputs.chinaShipping.value) || 0;
            const cbm = parseFloat(chinaFormInputs.cbm.value) || 0;
            const cbmPrice = parseFloat(chinaFormInputs.cbmPrice.value) || 0;
            const kg = parseFloat(chinaFormInputs.kg.value) || 0;
            const kgPrice = parseFloat(chinaFormInputs.kgPrice.value) || 0;
            const payProf = parseFloat(chinaFormInputs.payProf.value) || 0;
            const buyProf = parseFloat(chinaFormInputs.buyProf.value) || 0;

            // 1. Fee %3 = (Item-price + China-Ship) * 0.03
            const feePercent3 = (itemPrice + chinaShipping) * 0.03;
            chinaFormInputs.feePercent3.value = feePercent3.toFixed(2);

            // 2. China-tot-pri = Item-price + China-Ship + Fee %3
            const chinaTotalPrice = itemPrice + chinaShipping + feePercent3;
            chinaFormInputs.chinaTotalPrice.value = chinaTotalPrice.toFixed(2);

            // 3. CBM-ship-pri = CBM * CBM-PRI
            const cbmShippingPrice = cbm * cbmPrice;
            chinaFormInputs.cbmShippingPrice.value = cbmShippingPrice.toFixed(2);

            // 4. KG-ship-pri = KG * KG-price
            const kgShippingPrice = kg * kgPrice;
            chinaFormInputs.kgShippingPrice.value = kgShippingPrice.toFixed(2);

            // 5. Total price = China-tot-pri + CBM-ship-pri + KG-ship-pri
            const totalPrice = chinaTotalPrice + cbmShippingPrice + kgShippingPrice;
            chinaFormInputs.totalPrice.value = totalPrice.toFixed(2);

            // 6. Total-Prof = Pay-prof + Buy-prof
            const totalProf = payProf + buyProf;
            chinaFormInputs.totalProf.value = totalProf.toFixed(2);
        }

        const chinaSourceInputIds = [
            'itemPrice', 'chinaShipping', 'cbm', 'cbmPrice',
            'kg', 'kgPrice', 'payProf', 'buyProf'
        ];

        chinaSourceInputIds.forEach(id => {
            const el = chinaFormInputs[id];
            if (el) {
                el.addEventListener('input', calculateChinaValues);
            }
        });

        // Initial calculation in case of editing
        calculateChinaValues();
        // END: China Form Calculation Logic

        // ensure above Drafts if it's open
        const isDraftsOpen = draftsModal && !draftsModal.classList.contains('invisible');
        chinaModal.style.zIndex = isDraftsOpen ? '60' : '';
        chinaModal.classList.remove('invisible', 'opacity-0');
        const content = chinaModal.querySelector('.modal-content');
        if (content) content.classList.remove('scale-95');
        setBodyScroll(true);
    };
    const closeChinaModal = () => {
        if (!chinaModal) return;
        chinaModal.classList.add('invisible', 'opacity-0');
        const content = chinaModal.querySelector('.modal-content');
        if (content) content.classList.add('scale-95');
        chinaModal.style.zIndex = '';
        ensureBodyScroll();
        chinaPendingData = null;
        chinaEditIdx = null;
        draftEditIdx = null;
        chinaSaveTarget = 'china';
    };

    const renderChinaTable = (filterTerm = '') => {
        const term = (filterTerm || '').toLowerCase();
        if (!chinaTableBody) return;
        chinaTableBody.innerHTML = '';
        chinaStore
            .map((row, idx) => ({ row, idx }))
            .filter(({ row }) => {
                const name = (row.customerName || '').toLowerCase();
                const track = (row.trackNo || '').toLowerCase();
                return !term || name.includes(term) || track.includes(term);
            })
            .forEach(({ row, idx }) => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-gray-800/40';
                tr.dataset.index = String(idx);
                tr.innerHTML = `
                    <td class="table-cell">${row.trackNo || ''}</td>
                    <td class="table-cell">${row.customerName || ''}</td>
                    <td class="table-cell">${row.warehouseContact || ''}</td>
                    <td class="table-cell">${row.customerNo || ''}</td>
                    <td class="table-cell">${row.customerAddress || ''}</td>
                    <td class="table-cell">${row.sellerName || ''}</td>
                    <td class="table-cell">${row.platform || ''}</td>
                    <td class="table-cell">${row.productLink || ''}</td>
                    <td class="table-cell">${row.itemPrice || ''}</td>
                    <td class="table-cell">${row.itemNo || ''}</td>
                    <td class="table-cell">${row.chinaShipping || ''}</td>
                    <td class="table-cell">${row.feePercent3 || ''}</td>
                    <td class="table-cell">${row.chinaTotalPrice || ''}</td>
                    <td class="table-cell">${row.cbm || ''}</td>
                    <td class="table-cell">${row.cbmPrice || ''}</td>
                    <td class="table-cell">${row.cbmShippingPrice || ''}</td>
                    <td class="table-cell">${row.kg || ''}</td>
                    <td class="table-cell">${row.kgPrice || ''}</td>
                    <td class="table-cell">${row.kgShippingPrice || ''}</td>
                    <td class="table-cell">${row.totalPrice || ''}</td>
                    <td class="table-cell">${row.payProf || ''}</td>
                    <td class="table-cell">${row.buyProf || ''}</td>
                    <td class="table-cell">${row.totalProf || ''}</td>
                    <td class="table-cell">${row.remedy || ''}</td>
                    <td class="table-cell">${row.transportCompanyName || ''}</td>
                    <td class="table-cell">${row.date || ''}</td>
                    <td class="table-cell text-center space-x-2">
                        <button class="china-open-link-btn px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-500" title="Open Product Link"><i class="fas fa-up-right-from-square"></i></button>
                        <button class="china-edit-btn px-2 py-1 bg-amber-600 text-white rounded hover:bg-amber-500" title="Edit"><i class="fas fa-edit"></i></button>
                        <button class="china-delete-btn px-2 py-1 bg-red-600 text-white rounded hover:bg-red-500" title="Delete"><i class="fas fa-trash"></i></button>
                    </td>
                `;
                chinaTableBody.appendChild(tr);
            });
        const tableEl = chinaTableBody.closest('table');
        if (tableEl) makeTableSortable(tableEl);
    };

    // Drafts management
    function renderDraftsList(filterTerm = '') {
        if (!draftsModalBody) return;
        const term = (filterTerm || '').toLowerCase();
        const rows = draftsStore
            .map((row, idx) => ({ row, idx }))
            .filter(({ row }) => {
                const name = (row.customerName || '').toLowerCase();
                const track = (row.trackNo || '').toLowerCase();
                return !term || name.includes(term) || track.includes(term);
            })
            .map(({ row, idx }) => `
                <tr data-index="${idx}">
                    <td class="table-cell">${row.trackNo || ''}</td>
                    <td class="table-cell">${row.customerName || ''}</td>
                    <td class="table-cell">${row.date || ''}</td>
                    <td class="table-cell text-center space-x-2">
                        <button class="draft-add-btn px-2 py-1 bg-green-600 text-white rounded hover:bg-green-500" title="Add to China"><i class="fas fa-check"></i></button>
                        <button class="draft-view-btn px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-500" title="View Details"><i class="fas fa-eye"></i></button>
                        <button class="draft-open-link-btn px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-500" title="Open Product Link"><i class="fas fa-up-right-from-square"></i></button>
                        <button class="draft-edit-btn px-2 py-1 bg-amber-600 text-white rounded hover:bg-amber-500" title="Edit Draft"><i class="fas fa-edit"></i></button>
                        <button class="draft-delete-btn px-2 py-1 bg-red-600 text-white rounded hover:bg-red-500" title="Delete Draft"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            `).join('');
        draftsModalBody.innerHTML = `
            <div class="mb-3">
                <input id="drafts-search" type="text" placeholder="Search by Track-no or Cus-NAME" class="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white placeholder-gray-400">
            </div>
            <div class="overflow-auto">
                <table class="w-full border-collapse text-white text-sm">
                    <thead class="sticky top-0 bg-gray-800/70">
                        <tr>
                            <th class="table-header">Track-NO</th>
                            <th class="table-header">Cus-NAME</th>
                            <th class="table-header">Date</th>
                            <th class="table-header">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="drafts-table-body">
                        ${rows || '<tr><td class="table-cell text-center" colspan="4">No drafts</td></tr>'}
                    </tbody>
                </table>
            </div>
        `;
        const tableEl = draftsModalBody.querySelector('table');
        if (tableEl) makeTableSortable(tableEl);
        const draSearch = document.getElementById('drafts-search');
        if (draSearch) {
            draSearch.addEventListener('input', () => renderDraftsList(draSearch.value));
        }
    }
    function openDraftsModal() {
        if (!draftsModal) return;
        renderDraftsList('');
        draftsModal.classList.remove('invisible', 'opacity-0');
        const content = draftsModal.querySelector('.modal-content');
        if (content) content.classList.remove('scale-95');
        setBodyScroll(true);
    }
    function closeDraftsModal() {
        if (!draftsModal) return;
        draftsModal.classList.add('invisible', 'opacity-0');
        const content = draftsModal.querySelector('.modal-content');
        if (content) content.classList.add('scale-95');
        ensureBodyScroll();
    }
    function buildDraftDetailsHTML(data = {}) {
        let rows = '';
        chinaFields.forEach((key, idx) => {
            const label = chinaLabels[idx] || key;
            const value = data[key] ? String(data[key]) : '';
            rows += `<tr><th class="text-left pr-4 py-1 text-gray-300">${label}</th><td class="py-1">${value}</td></tr>`;
        });
        return `<div class="overflow-auto"><table class="w-full">${rows}</table></div>`;
    }
    function openDraftViewModal(data) {
        if (!draftsViewModal) return;
        draftsViewModalBody.innerHTML = buildDraftDetailsHTML(data);
        // ensure above Drafts if it's open
        const isDraftsOpen = draftsModal && !draftsModal.classList.contains('invisible');
        draftsViewModal.style.zIndex = isDraftsOpen ? '60' : '';
        draftsViewModal.classList.remove('invisible', 'opacity-0');
        const content = draftsViewModal.querySelector('.modal-content');
        if (content) content.classList.remove('scale-95');
        setBodyScroll(true);
    }
    function closeDraftViewModal() {
        if (!draftsViewModal) return;
        draftsViewModal.classList.add('invisible', 'opacity-0');
        const content = draftsViewModal.querySelector('.modal-content');
        if (content) content.classList.add('scale-95');
        draftsViewModal.style.zIndex = '';
        ensureBodyScroll();
    }
    if (draftsModalBody) {
        draftsModalBody.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            const tr = e.target.closest('tr');
            const idx = tr ? parseInt(tr.dataset.index || '-1', 10) : -1;
            if (idx < 0 || isNaN(idx)) return;
            if (btn.classList.contains('draft-add-btn')) {
                const data = draftsStore[idx];
                draftsStore.splice(idx, 1);
                chinaStore.push(data);
                renderDraftsList(document.getElementById('drafts-search')?.value || '');
                renderChinaTable(chinaSearchInput ? chinaSearchInput.value : '');
                showNotification('Draft added to China.', 'success');
                return;
            }
            if (btn.classList.contains('draft-view-btn')) {
                openDraftViewModal(draftsStore[idx]);
                return;
            }
            if (btn.classList.contains('draft-open-link-btn')) {
                const urlRaw = (draftsStore[idx] && draftsStore[idx].productLink) ? String(draftsStore[idx].productLink).trim() : '';
                if (!urlRaw) { showNotification('No Product-Link set for this draft.', 'warning'); return; }
                const href = /^https?:\/\//i.test(urlRaw) ? urlRaw : ('http://' + urlRaw);
                try { window.open(href, '_blank'); } catch (e) { showNotification('Unable to open link.', 'error'); }
                return;
            }
            if (btn.classList.contains('draft-edit-btn')) {
                draftEditIdx = idx;
                chinaSaveTarget = 'draft';
                openChinaModal(draftsStore[idx]);
                return;
            }
            if (btn.classList.contains('draft-delete-btn')) {
                if (confirm('Delete this draft?')) {
                    draftsStore.splice(idx, 1);
                    renderDraftsList(document.getElementById('drafts-search')?.value || '');
                    showNotification('Draft deleted.', 'error');
                }
                return;
            }
        });
    }
    if (draftsModalCloseBtn) draftsModalCloseBtn.addEventListener('click', closeDraftsModal);
    if (draftsModalCancelBtn) draftsModalCancelBtn.addEventListener('click', closeDraftsModal);
    if (draftsViewModalCloseBtn) draftsViewModalCloseBtn.addEventListener('click', closeDraftViewModal);
    if (draftsViewModalCancelBtn) draftsViewModalCancelBtn.addEventListener('click', closeDraftViewModal);
    if (newDraftBtn) {
        newDraftBtn.addEventListener('click', () => {
            chinaSaveTarget = 'draft';
            chinaEditIdx = null;
            draftEditIdx = null;
            openChinaModal({});
        });
    }

    if (chinaAddBtn) {
        chinaAddBtn.addEventListener('click', () => {
            chinaSaveTarget = 'china';
            chinaEditIdx = null;
            openChinaModal({});
        });
    }
    if (chinaDraftsBtn) {
        chinaDraftsBtn.addEventListener('click', () => {
            openDraftsModal();
        });
    }

    
    if (chinaSearchInput) {
        chinaSearchInput.addEventListener('input', () => {
            renderChinaTable(chinaSearchInput.value);
        });
    }
    if (chinaTableBody) {
        chinaTableBody.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            const tr = e.target.closest('tr');
            const idx = tr ? parseInt(tr.dataset.index || '-1', 10) : -1;
            if (idx < 0 || isNaN(idx)) return;
            if (btn.classList.contains('china-open-link-btn')) {
                const urlRaw = (chinaStore[idx] && chinaStore[idx].productLink) ? String(chinaStore[idx].productLink).trim() : '';
                if (!urlRaw) { showNotification('No Product-Link set for this entry.', 'warning'); return; }
                const href = /^https?:\/\//i.test(urlRaw) ? urlRaw : ('http://' + urlRaw);
                try { window.open(href, '_blank'); } catch (e) { showNotification('Unable to open link.', 'error'); }
                return;
            }
            if (btn.classList.contains('china-delete-btn')) {
                if (confirm('Delete this entry?')) {
                    chinaStore.splice(idx, 1);
                    renderChinaTable(chinaSearchInput ? chinaSearchInput.value : '');
                    showNotification('Entry deleted.', 'error');
                }
                return;
            }
            if (btn.classList.contains('china-edit-btn')) {
                chinaEditIdx = idx;
                openChinaModal(chinaStore[idx]);
                return;
            }
        });
    }
    if (chinaModalCloseBtn) {
        chinaModalCloseBtn.addEventListener('click', closeChinaModal);
    }
    if (chinaModalCancelBtn) {
        chinaModalCancelBtn.addEventListener('click', closeChinaModal);
    }
    if (chinaModalSaveBtn) {
        chinaModalSaveBtn.addEventListener('click', () => {
            const data = {};
            chinaFields.forEach(k => {
                const el = document.getElementById('china-modal-' + k);
                data[k] = el ? el.value.trim() : '';
            });
            if (chinaSaveTarget === 'draft') {
                if (draftEditIdx !== null) {
                    draftsStore[draftEditIdx] = data;
                    showNotification('Draft updated.', 'success');
                } else {
                    draftsStore.push(data);
                    showNotification('Saved as draft.', 'info');
                }
                if (draftsModal && !draftsModal.classList.contains('invisible')) {
                    renderDraftsList(document.getElementById('drafts-search')?.value || '');
                }
                closeChinaModal();
                draftEditIdx = null;
                return;
            }
            if (chinaEditIdx !== null) {
                chinaStore[chinaEditIdx] = data;
                showNotification('Entry updated.', 'success');
            } else {
                chinaStore.push(data);
                showNotification('Added to China.', 'success');
            }
            renderChinaTable(chinaSearchInput ? chinaSearchInput.value : '');
            closeChinaModal();
        });
    }

    // Order form mode and context
    let orderFormMode = 'add'; // 'add' | 'edit'
    let orderEditCtx = { code: null, index: null };
    
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    let notificationTimeout;

    // Sortable tables helper with icons
    const makeTableSortable = (tableEl) => {
        if (!tableEl || tableEl.dataset.sortInit) return;
        const ths = tableEl.querySelectorAll('thead th');
        const tbody = tableEl.querySelector('tbody');
        if (!ths.length || !tbody) return;
        const dirState = {};
        ths.forEach((th, idx) => {
            const headerText = th.textContent.trim().toLowerCase();
            if (!th.querySelector('.sort-icon') && headerText !== 'actions') {
                const i = document.createElement('i');
                i.className = 'sort-icon fas fa-sort text-gray-400 ml-2';
                th.appendChild(i);
                th.classList.add('cursor-pointer', 'select-none');
            }
            th.addEventListener('click', () => {
                if (headerText === 'actions') return;
                const rows = Array.from(tbody.querySelectorAll('tr'));
                const asc = dirState[idx] = !dirState[idx];
                rows.sort((a, b) => {
                    const ta = (a.children[idx]?.textContent || '').trim();
                    const tb = (b.children[idx]?.textContent || '').trim();
                    const na = parseFloat(ta.replace(/[^0-9.-]/g, ''));
                    const nb = parseFloat(tb.replace(/[^0-9.-]/g, ''));
                    const da = Date.parse(ta);
                    const db = Date.parse(tb);
                    let cmp;
                    if (!isNaN(na) && !isNaN(nb)) cmp = na - nb;
                    else if (!isNaN(da) && !isNaN(db)) cmp = da - db;
                    else cmp = ta.localeCompare(tb);
                    return asc ? cmp : -cmp;
                });
                rows.forEach(r => tbody.appendChild(r));
                ths.forEach((oth, j) => {
                    const ico = oth.querySelector('.sort-icon');
                    if (!ico) return;
                    if (j === idx) ico.className = `sort-icon fas ${asc ? 'fa-sort-up' : 'fa-sort-down'} text-white ml-2`;
                    else ico.className = 'sort-icon fas fa-sort text-gray-400 ml-2';
                });
            });
        });
        tableEl.dataset.sortInit = '1';
    };

    // Initialize sorting on all tables
    document.querySelectorAll('table').forEach(makeTableSortable);


    function closeAllModals() {
        [userModal, userDetailsModal, orderModal, worldModal, imageViewerModal, rotwModal, expenseModal, paymentReceiptModal].forEach(modal => {
            if (modal) {
                modal.classList.add('invisible', 'opacity-0');
                const content = modal.querySelector('.modal-content');
                if (content) content.classList.add('scale-95');
            }
        });
        const cm = document.getElementById('china-modal');
        if (cm) {
            cm.classList.add('invisible', 'opacity-0');
            const c = cm.querySelector('.modal-content');
            if (c) c.classList.add('scale-95');
        }
        const dm = document.getElementById('drafts-modal');
        if (dm) {
            dm.classList.add('invisible', 'opacity-0');
            const dmc = dm.querySelector('.modal-content');
            if (dmc) dmc.classList.add('scale-95');
        }
        const dvm = document.getElementById('drafts-view-modal');
        if (dvm) {
            dvm.classList.add('invisible', 'opacity-0');
            const dvmc = dvm.querySelector('.modal-content');
            if (dvmc) dvmc.classList.add('scale-95');
        }
        document.body.classList.remove('overflow-hidden');
    }

    function setBodyScroll(lock) {
        if (lock) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }
    function anyModalVisible() {
        const ids = ['user-modal','user-details-modal','order-modal','china-modal','drafts-modal','drafts-view-modal', 'world-modal', 'image-viewer-modal', 'rotw-modal', 'expense-modal', 'payment-receipt-modal'];
        return ids.some(id => {
            const el = document.getElementById(id);
            return el && !el.classList.contains('invisible');
        });
    }
    function ensureBodyScroll() {
        if (anyModalVisible()) setBodyScroll(true); else setBodyScroll(false);
    }

    const applyManageUsersFilter = () => {
        const term = (manageUsersSearchInput && manageUsersSearchInput.value || '').toLowerCase().trim();
        Array.from(userTableBody.querySelectorAll('tr')).forEach(tr => {
            const codeEl = tr.querySelector('[data-label="user-code"]');
            const nameEl = tr.querySelector('[data-label="full-name"]');
            if (!codeEl || !nameEl) return;
            const code = codeEl.textContent.toLowerCase();
            const name = nameEl.textContent.toLowerCase();
            const match = !term || code.includes(term) || name.includes(term);
            tr.classList.toggle('hidden', term && !match);
        });
    };
    if (manageUsersSearchInput) {
        manageUsersSearchInput.addEventListener('input', applyManageUsersFilter);
    }

    const showNotification = (message, type = 'info') => {
        clearTimeout(notificationTimeout);
        const colors = { success: 'bg-green-600', error: 'bg-red-600', warning: 'bg-yellow-600', info: 'bg-gray-800' };
        notification.className = `px-6 py-3 ${colors[type]} text-white text-lg rounded-full shadow-2xl`;
        notificationText.textContent = message;
        notification.style.bottom = '20px';
        notificationTimeout = setTimeout(() => {
            notification.style.bottom = '-100px';
        }, 3000);
    };

    const hideAllViews = () => {
        addUserView.classList.add('hidden');
        addUserView.classList.remove('fullscreen');
        usersView.classList.add('hidden');
        usersView.classList.remove('fullscreen');
        ordersView.classList.add('hidden');
        ordersView.classList.remove('fullscreen');
        accountingView.classList.add('hidden');
        accountingView.classList.remove('fullscreen');
        chinaView.classList.add('hidden');
        chinaView.classList.remove('fullscreen');
        if (chinaAccountingView) { chinaAccountingView.classList.add('hidden'); chinaAccountingView.classList.remove('fullscreen'); }
        if (worldView) { worldView.classList.add('hidden'); worldView.classList.remove('fullscreen'); }
        if (worldAccountingView) { worldAccountingView.classList.add('hidden'); worldAccountingView.classList.remove('fullscreen'); }
        if (restOfWorldView) { restOfWorldView.classList.add('hidden'); restOfWorldView.classList.remove('fullscreen'); }
        if (rotwAccountingView) { 
            rotwAccountingView.classList.add('hidden'); 
            rotwAccountingView.classList.remove('fullscreen'); 
            Object.assign(rotwAccountingView.style, {
                position: '', top: '', left: '', width: '', height: '', zIndex: '', overflowY: '', backgroundColor: ''
            });
        }
        if (expensesView) {
            expensesView.classList.add('hidden');
            expensesView.classList.remove('fullscreen');
        }
        if (totalExpensesView) {
            totalExpensesView.classList.add('hidden');
            totalExpensesView.classList.remove('fullscreen');
        }
        if (paymentReceiptsView) {
            paymentReceiptsView.classList.add('hidden');
            paymentReceiptsView.classList.remove('fullscreen');
        }
    }

    const showDashboardView = () => {
        closeAllModals();
        hideAllViews();
        setBodyScroll(false);
        dashboardView.classList.remove('hidden');
        document.querySelector('.w-full.max-w-7xl.mx-auto').classList.remove('hidden');
    };
    
    const showAddUserView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        addUserView.classList.remove('hidden');
        addUserView.classList.add('fullscreen');
        setBodyScroll(true);
    };

    const openModal = (mode = 'add', data = {}) => {
        closeAllModals();
        userForm.reset();
        if (mode === 'add') {
            modalTitle.textContent = 'Add New User';
            formSubmitBtn.textContent = 'Add User';
            document.getElementById('user-code').disabled = false;
            editUserCodeInput.value = '';
        } else {
            modalTitle.textContent = 'Edit User';
            formSubmitBtn.textContent = 'Update User';
            document.getElementById('user-code').value = data.userCode;
            document.getElementById('user-code').disabled = true;
            document.getElementById('full-name').value = data.fullName;
            document.getElementById('phone-no1').value = data.phoneNo1;
            document.getElementById('phone-no2').value = data.phoneNo2;
            document.getElementById('city').value = data.city;
            document.getElementById('neighborhood').value = data.neighborhood;
            document.getElementById('address').value = data.address;
            document.getElementById('close-place').value = data.closePlace;
            editUserCodeInput.value = data.userCode;
        }
        userModal.classList.remove('invisible', 'opacity-0');
        userModal.querySelector('.modal-content').classList.remove('scale-95');
        setBodyScroll(true);
    };

    const closeModal = () => {
        userModal.classList.add('invisible', 'opacity-0');
        userModal.querySelector('.modal-content').classList.add('scale-95');
        setBodyScroll(false);
    };

    let usersStore = {};
    let ordersStore = {
        '001': [
            { trackNo: 'TRACK123', country: '', company: '', weight: 5.2, pPerKg: 10.00, shippingCost: 52.00, inShipCost: 5.00, inShipping: 57.00, purchesProf: 20.00, moReceived: 100.00, totalProfit: 23.00, dateArrival: '2025-08-15', cashBack: 5.00, date: '2025-08-10' }
        ],
    };

    const rebuildUsersStoreFromDOM = () => {
        usersStore = {};
        Array.from(userTableBody.querySelectorAll('tr')).forEach(tr => {
            const code = tr.querySelector('[data-label="user-code"]').textContent.trim();
            usersStore[code] = {
                userCode: code,
                fullName: tr.querySelector('[data-label="full-name"]').textContent.trim(),
                phoneNo1: tr.querySelector('[data-label="phone-no1"]').textContent.trim(),
                phoneNo2: tr.querySelector('[data-label="phone-no2"]').textContent.trim(),
                city: tr.querySelector('[data-label="city"]').textContent.trim(),
                neighborhood: tr.querySelector('[data-label="neighborhood"]').textContent.trim(),
                address: tr.querySelector('[data-label="address"]').textContent.trim(),
                closePlace: tr.querySelector('[data-label="close-place"]').textContent.trim(),
            };
        });
    };
    rebuildUsersStoreFromDOM();

    let selectedUserCodeInUsers = null;
    let selectedUserNameInUsers = null;
    const updateUsersOrdersButtonState = () => {
        if (usersOrdersBtn) usersOrdersBtn.disabled = !selectedUserCodeInUsers;
    };
    updateUsersOrdersButtonState();

    const showUsersView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        usersView.classList.remove('hidden');
        usersView.classList.add('fullscreen');
        setBodyScroll(true);
        renderUsersTableView();
    };

    const hideUsersViewToDashboard = () => {
        usersView.classList.add('hidden');
        usersView.classList.remove('fullscreen');
        setBodyScroll(false);
        dashboardView.classList.remove('hidden');
    };

    const showOrdersView = (userCode, userName) => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        ordersView.classList.remove('hidden');
        ordersView.classList.add('fullscreen');
        setBodyScroll(true);
        
        ordersTitle.textContent = `Orders for ${userName}`;
        ordersUserCode.textContent = `User-Code: ${userCode}`;
        currentOrdersUserCode = userCode;
        currentOrdersUserName = userName;
        renderOrdersTable(userCode, ordersSearchInput ? ordersSearchInput.value : '');
    };

    const hideOrdersViewToUsers = () => {
        ordersView.classList.add('hidden');
        ordersView.classList.remove('fullscreen');
        showUsersView();
    };

    const showAccountingView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if (accountingView) {
            accountingView.classList.remove('hidden');
            accountingView.classList.add('fullscreen');
        }
        setBodyScroll(true);
        renderAccounting();
    };

    const showChinaView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if(chinaView) {
            chinaView.classList.remove('hidden');
            chinaView.classList.add('fullscreen');
        }
        setBodyScroll(true);
    };

    const showChinaAccountingView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if (chinaAccountingView) {
            chinaAccountingView.classList.remove('hidden');
            chinaAccountingView.classList.add('fullscreen');
        }
        setBodyScroll(true);
        renderChinaAccounting();
    };

    const showWorldAccountingView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if (worldAccountingView) {
            worldAccountingView.classList.remove('hidden');
            worldAccountingView.classList.add('fullscreen');
        }
        setBodyScroll(true);
        renderWorldAccounting();
    };
    
    const showRotwAccountingView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if (rotwAccountingView) {
            rotwAccountingView.classList.remove('hidden');
            rotwAccountingView.classList.add('fullscreen');
            Object.assign(rotwAccountingView.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                zIndex: '40',
                overflowY: 'auto',
                backgroundColor: '#111827'
            });
        }
        setBodyScroll(true);
        renderRotwAccounting();
    };

    const showRestOfWorldView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if (restOfWorldView) {
            restOfWorldView.classList.remove('hidden');
            restOfWorldView.classList.add('fullscreen');
        }
        setBodyScroll(true);
        renderRotwTable();
    };

    const showExpensesView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if(expensesView) {
            expensesView.classList.remove('hidden');
            expensesView.classList.add('fullscreen');
        }
        setBodyScroll(true);
        renderExpensesTable();
    };
    
    const showTotalExpensesView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if(totalExpensesView) {
            totalExpensesView.classList.remove('hidden');
            totalExpensesView.classList.add('fullscreen');
        }
        setBodyScroll(true);
        renderTotalSummary();
    };

    const showPaymentReceiptsView = () => {
        closeAllModals();
        dashboardView.classList.add('hidden');
        hideAllViews();
        if(paymentReceiptsView) {
            paymentReceiptsView.classList.remove('hidden');
            paymentReceiptsView.classList.add('fullscreen');
        }
        setBodyScroll(true);
        renderPaymentReceiptsTable();
    };

    const getNum = (v) => {
        const n = parseFloat(String(v ?? '').toString().replace(/[^0-9.-]/g, ''));
        return isNaN(n) ? 0 : n;
    };

    const renderChinaAccounting = () => {
        if (!chinaAcctBody) return;
        const fromStr = chinaAcctDateFromInput && chinaAcctDateFromInput.value ? chinaAcctDateFromInput.value : '';
        const toStr = chinaAcctDateToInput && chinaAcctDateToInput.value ? chinaAcctDateToInput.value : '';
        const fromDate = fromStr ? new Date(fromStr) : null;
        const toDate = toStr ? new Date(toStr) : null;
        if (toDate) toDate.setHours(23,59,59,999);

        const filtered = (chinaStore || []).filter(row => {
            if (!row) return false;
            if (!fromDate && !toDate) return true;
            const d = row.date ? new Date(row.date) : null;
            if (!d || isNaN(d)) return false;
            if (fromDate && d < fromDate) return false;
            if (toDate && d > toDate) return false;
            return true;
        });

        const sums = {
            itemPrice: 0, shipping: 0, chinaTotal: 0, cbm: 0, kg: 0, totalPrice: 0, payProf: 0, buyProf: 0, totalProf: 0,
        };
        chinaAcctBody.innerHTML = '';
        filtered.forEach(row => {
            sums.itemPrice += getNum(row.itemPrice);
            sums.shipping += getNum(row.chinaShipping);
            sums.chinaTotal += getNum(row.chinaTotalPrice);
            sums.cbm += getNum(row.cbm);
            sums.kg += getNum(row.kg);
            sums.totalPrice += getNum(row.totalPrice);
            sums.payProf += getNum(row.payProf);
            sums.buyProf += getNum(row.buyProf);
            sums.totalProf += getNum(row.totalProf);

            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-800/40';
            tr.innerHTML = `
                <td class="table-cell">${row.trackNo || ''}</td>
                <td class="table-cell">${row.customerName || ''}</td>
                <td class="table-cell">${row.sellerName || ''}</td>
                <td class="table-cell">${row.itemPrice || ''}</td>
                <td class="table-cell">${row.chinaShipping || ''}</td>
                <td class="table-cell">${row.chinaTotalPrice || ''}</td>
                <td class="table-cell">${row.cbm || ''}</td>
                <td class="table-cell">${row.kg || ''}</td>
                <td class="table-cell">${row.totalPrice || ''}</td>
                <td class="table-cell">${row.payProf || ''}</td>
                <td class="table-cell">${row.buyProf || ''}</td>
                <td class="table-cell">${row.totalProf || ''}</td>
                <td class="table-cell">${row.date || ''}</td>
            `;
            chinaAcctBody.appendChild(tr);
        });

        if (chinaAcctTotals) {
            if (chinaAcctTotals.itemPrice) chinaAcctTotals.itemPrice.textContent = sums.itemPrice.toFixed(2);
            if (chinaAcctTotals.shipping) chinaAcctTotals.shipping.textContent = sums.shipping.toFixed(2);
            if (chinaAcctTotals.chinaTotal) chinaAcctTotals.chinaTotal.textContent = sums.chinaTotal.toFixed(2);
            if (chinaAcctTotals.cbm) chinaAcctTotals.cbm.textContent = sums.cbm.toFixed(2);
            if (chinaAcctTotals.kg) chinaAcctTotals.kg.textContent = sums.kg.toFixed(2);
            if (chinaAcctTotals.totalPrice) chinaAcctTotals.totalPrice.textContent = sums.totalPrice.toFixed(2);
            if (chinaAcctTotals.payProf) chinaAcctTotals.payProf.textContent = sums.payProf.toFixed(2);
            if (chinaAcctTotals.buyProf) chinaAcctTotals.buyProf.textContent = sums.buyProf.toFixed(2);
            if (chinaAcctTotals.totalProf) chinaAcctTotals.totalProf.textContent = sums.totalProf.toFixed(2);
        }

        const tableEl = chinaAcctBody.closest('table');
        if (tableEl) makeTableSortable(tableEl);
    };

    const renderWorldAccounting = () => {
        if (!worldAcctBody) return;
        const fromStr = worldAcctDateFromInput && worldAcctDateFromInput.value ? worldAcctDateFromInput.value : '';
        const toStr = worldAcctDateToInput && worldAcctDateToInput.value ? worldAcctDateToInput.value : '';
        const fromDate = fromStr ? new Date(fromStr) : null;
        const toDate = toStr ? new Date(toStr) : null;
        if (toDate) toDate.setHours(23, 59, 59, 999);

        const filtered = (worldStore || []).filter(row => {
            if (!row) return false;
            if (!fromDate && !toDate) return true;
            const d = row.date ? new Date(row.date) : null;
            if (!d || isNaN(d)) return false;
            if (fromDate && d < fromDate) return false;
            if (toDate && d > toDate) return false;
            return true;
        });

        const sums = {
            weight: 0, shippingOnCust: 0, shippingCost: 0, transferCharge: 0, finalProfit: 0, totalPrice: 0, remedy: 0
        };
        worldAcctBody.innerHTML = '';
        filtered.forEach(row => {
            sums.weight += getNum(row.itemWeight);
            sums.shippingOnCust += getNum(row.shippingOnCustomer);
            sums.shippingCost += getNum(row.shippingCost);
            sums.transferCharge += getNum(row.transferChargeToCompany);
            sums.finalProfit += getNum(row.finalProfit);
            sums.totalPrice += getNum(row.totalPrice);
            sums.remedy += getNum(row.remedy);

            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-800/40';
            tr.innerHTML = `
                <td class="table-cell">${row.senderName || ''}</td>
                <td class="table-cell">${row.recipientName || ''}</td>
                <td class="table-cell">${row.itemWeight || ''}</td>
                <td class="table-cell">${row.shippingOnCustomer || ''}</td>
                <td class="table-cell">${row.shippingCost || ''}</td>
                <td class="table-cell">${row.transferChargeToCompany || ''}</td>
                <td class="table-cell">${row.senderCompanyName || ''}</td>
                <td class="table-cell">${row.finalProfit || ''}</td>
                <td class="table-cell">${row.totalPrice || ''}</td>
                <td class="table-cell">${row.remedy || ''}</td>
            `;
            worldAcctBody.appendChild(tr);
        });

        if (worldAcctTotals) {
            if (worldAcctTotals.weight) worldAcctTotals.weight.textContent = sums.weight.toFixed(2);
            if (worldAcctTotals.shippingOnCust) worldAcctTotals.shippingOnCust.textContent = sums.shippingOnCust.toFixed(2);
            if (worldAcctTotals.shippingCost) worldAcctTotals.shippingCost.textContent = sums.shippingCost.toFixed(2);
            if (worldAcctTotals.transferCharge) worldAcctTotals.transferCharge.textContent = sums.transferCharge.toFixed(2);
            if (worldAcctTotals.finalProfit) worldAcctTotals.finalProfit.textContent = sums.finalProfit.toFixed(2);
            if (worldAcctTotals.totalPrice) worldAcctTotals.totalPrice.textContent = sums.totalPrice.toFixed(2);
            if (worldAcctTotals.remedy) worldAcctTotals.remedy.textContent = sums.remedy.toFixed(2);
        }

        const tableEl = worldAcctBody.closest('table');
        if (tableEl) makeTableSortable(tableEl);
    };
    
    // New ROTW Accounting Render Function
    const renderRotwAccounting = () => {
        if (!rotwAcctBody) return;
        const fromStr = rotwAcctDateFromInput && rotwAcctDateFromInput.value ? rotwAcctDateFromInput.value : '';
        const toStr = rotwAcctDateToInput && rotwAcctDateToInput.value ? rotwAcctDateToInput.value : '';
        const fromDate = fromStr ? new Date(fromStr) : null;
        const toDate = toStr ? new Date(toStr) : null;
        if (toDate) toDate.setHours(23, 59, 59, 999);

        const filtered = (rotwStore || []).filter(row => {
            if (!row) return false;
            if (!fromDate && !toDate) return true;
            const d = row.date ? new Date(row.date) : null;
            if (!d || isNaN(d)) return false;
            if (fromDate && d < fromDate) return false;
            if (toDate && d > toDate) return false;
            return true;
        });

        const sums = {
            itemPrice: 0, remedy: 0, shipToKrd: 0, totalPrice: 0, payProf: 0, buyProf: 0, totalProf: 0,
        };
        rotwAcctBody.innerHTML = '';
        filtered.forEach(row => {
            sums.itemPrice += getNum(row.itemPrice);
            sums.remedy += getNum(row.remedy);
            sums.shipToKrd += getNum(row.shipToKrd);
            sums.totalPrice += getNum(row.totalPrice);
            sums.payProf += getNum(row.payProf);
            sums.buyProf += getNum(row.buyProf);
            sums.totalProf += getNum(row.totalProf);

            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-800/40';
            tr.innerHTML = `
                <td class="table-cell">${row.trackNo || ''}</td>
                <td class="table-cell">${row.customerName || ''}</td>
                <td class="table-cell">${row.itemPrice || ''}</td>
                <td class="table-cell">${row.remedy || ''}</td>
                <td class="table-cell">${row.shipToKrd || ''}</td>
                <td class="table-cell">${row.totalPrice || ''}</td>
                <td class="table-cell">${row.payProf || ''}</td>
                <td class="table-cell">${row.buyProf || ''}</td>
                <td class="table-cell">${row.totalProf || ''}</td>
            `;
            rotwAcctBody.appendChild(tr);
        });

        if (rotwAcctTotals) {
            if (rotwAcctTotals.itemPrice) rotwAcctTotals.itemPrice.textContent = sums.itemPrice.toFixed(2);
            if (rotwAcctTotals.remedy) rotwAcctTotals.remedy.textContent = sums.remedy.toFixed(2);
            if (rotwAcctTotals.shipToKrd) rotwAcctTotals.shipToKrd.textContent = sums.shipToKrd.toFixed(2);
            if (rotwAcctTotals.totalPrice) rotwAcctTotals.totalPrice.textContent = sums.totalPrice.toFixed(2);
            if (rotwAcctTotals.payProf) rotwAcctTotals.payProf.textContent = sums.payProf.toFixed(2);
            if (rotwAcctTotals.buyProf) rotwAcctTotals.buyProf.textContent = sums.buyProf.toFixed(2);
            if (rotwAcctTotals.totalProf) rotwAcctTotals.totalProf.textContent = sums.totalProf.toFixed(2);
        }

        const tableEl = rotwAcctBody.closest('table');
        if (tableEl) makeTableSortable(tableEl);
    };

    // Render Expenses Table
    const renderExpensesTable = () => {
        if (!expensesTableBody) return;
        expensesTableBody.innerHTML = '';

        expensesStore.forEach((expense, index) => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-800/40';
            tr.dataset.id = expense.id;
            tr.innerHTML = `
                <td class="table-cell">${expense.rent.toFixed(2)}</td>
                <td class="table-cell">${expense.electricity.toFixed(2)}</td>
                <td class="table-cell">${expense.device.toFixed(2)}</td>
                <td class="table-cell">${expense.qrtasia.toFixed(2)}</td>
                <td class="table-cell">${expense.others.toFixed(2)}</td>
                <td class="table-cell font-semibold">${expense.total.toFixed(2)}</td>
                <td class="table-cell">${expense.date}</td>
                <td class="table-cell text-center space-x-2">
                    <button class="expense-edit-btn p-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition-all" title="Edit" data-index="${index}"><i class="fas fa-edit"></i></button>
                    <button class="expense-delete-btn p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all" title="Delete" data-index="${index}"><i class="fas fa-trash"></i></button>
                </td>
            `;
            expensesTableBody.appendChild(tr);
        });
        makeTableSortable(expensesTableBody.closest('table'));
    };

    // Render Payment Receipts Table (NEW)
    const renderPaymentReceiptsTable = () => {
        if (!paymentReceiptsTableBody) return;
        paymentReceiptsTableBody.innerHTML = '';
        selectedReceiptForPrint = null; // Reset selection on re-render

        paymentReceiptsStore.forEach((receipt, index) => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-800/40 cursor-pointer';
            tr.dataset.id = receipt.id;
            tr.dataset.index = index; // Add index for easy data retrieval
            tr.innerHTML = `
                <td class="table-cell">${receipt.name}</td>
                <td class="table-cell">${receipt.phoneNo}</td>
                <td class="table-cell">${receipt.iqd.toFixed(2)}</td>
                <td class="table-cell">${receipt.usd.toFixed(2)}</td>
                <td class="table-cell">${receipt.typeOfWork}</td>
                <td class="table-cell">${receipt.note}</td>
                <td class="table-cell font-semibold">${receipt.total.toFixed(2)}</td>
                <td class="table-cell">${receipt.date}</td>
                <td class="table-cell text-center space-x-2">
                    <button class="receipt-edit-btn p-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition-all" title="Edit" data-index="${index}"><i class="fas fa-edit"></i></button>
                    <button class="receipt-delete-btn p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all" title="Delete" data-index="${index}"><i class="fas fa-trash"></i></button>
                </td>
            `;
            paymentReceiptsTableBody.appendChild(tr);
        });
        makeTableSortable(paymentReceiptsTableBody.closest('table'));
    };

    // Renders the main summary view for Total Expenses
    const renderTotalSummary = () => {
        const fromStr = totalSummaryDateFrom.value;
        const toStr = totalSummaryDateTo.value;
        const fromDate = fromStr ? new Date(fromStr) : null;
        const toDate = toStr ? new Date(toStr) : null;
        if (toDate) toDate.setHours(23, 59, 59, 999);

        const filterByDate = (row) => {
            if (!row || !row.date) return false;
            if (!fromDate && !toDate) return true;
            const d = new Date(row.date);
            if (isNaN(d)) return false;
            if (fromDate && d < fromDate) return false;
            if (toDate && d > toDate) return false;
            return true;
        };

        // Calculate Total Profit from Orders
        const totalProfitOrders = Object.values(ordersStore).flat().filter(filterByDate).reduce((sum, order) => sum + getNum(order.totalProfit), 0);
        
        // Calculate Total Profit from China
        const totalProfitChina = chinaStore.filter(filterByDate).reduce((sum, item) => sum + getNum(item.totalProf), 0);

        // Calculate Total Profit from World
        const totalProfitWorld = worldStore.filter(filterByDate).reduce((sum, item) => sum + getNum(item.finalProfit), 0);
        
        // Calculate Total Profit from R.O.T.W
        const totalProfitRotw = rotwStore.filter(filterByDate).reduce((sum, item) => sum + getNum(item.totalProf), 0);

        // Calculate Total Expenses
        const totalExpenses = expensesStore.filter(filterByDate).reduce((sum, expense) => sum + getNum(expense.total), 0);

        // Calculate Net Total
        const netTotal = totalProfitOrders + totalProfitChina + totalProfitWorld + totalProfitRotw - totalExpenses;

        // Update UI
        summaryTotalProfitOrders.textContent = totalProfitOrders.toFixed(2);
        summaryTotalProfitChina.textContent = totalProfitChina.toFixed(2);
        summaryTotalProfitWorld.textContent = totalProfitWorld.toFixed(2);
        summaryTotalProfitRotw.textContent = totalProfitRotw.toFixed(2);
        summaryTotalExpenses.textContent = totalExpenses.toFixed(2);
        summaryNetTotal.textContent = netTotal.toFixed(2);
        
        // Change color of Net Total based on value
        summaryNetTotal.classList.toggle('text-red-400', netTotal < 0);
        summaryNetTotal.classList.toggle('text-green-400', netTotal >= 0);
    };


    if (worldAccountingNavLink) worldAccountingNavLink.addEventListener('click', showWorldAccountingView);
    if (worldAcctBackBtn) worldAcctBackBtn.addEventListener('click', showDashboardView);
    if (worldAcctDateFromInput) worldAcctDateFromInput.addEventListener('input', renderWorldAccounting);
    if (worldAcctDateToInput) worldAcctDateToInput.addEventListener('input', renderWorldAccounting);
    if (worldAcctClearBtn) {
        worldAcctClearBtn.addEventListener('click', () => {
            if (worldAcctDateFromInput) worldAcctDateFromInput.value = '';
            if (worldAcctDateToInput) worldAcctDateToInput.value = '';
            renderWorldAccounting();
        });
    }
    
    // New ROTW Accounting Event Listeners
    if (rotwAccountingNavLink) rotwAccountingNavLink.addEventListener('click', showRotwAccountingView);
    if (rotwAcctBackBtn) rotwAcctBackBtn.addEventListener('click', showDashboardView);
    if (rotwAcctDateFromInput) rotwAcctDateFromInput.addEventListener('input', renderRotwAccounting);
    if (rotwAcctDateToInput) rotwAcctDateToInput.addEventListener('input', renderRotwAccounting);
    if (rotwAcctClearBtn) {
        rotwAcctClearBtn.addEventListener('click', () => {
            if (rotwAcctDateFromInput) rotwAcctDateFromInput.value = '';
            if (rotwAcctDateToInput) rotwAcctDateToInput.value = '';
            renderRotwAccounting();
        });
    }

    if (chinaAccountingNavLink) chinaAccountingNavLink.addEventListener('click', showChinaAccountingView);
    if (chinaAcctBackBtn) chinaAcctBackBtn.addEventListener('click', showDashboardView);
    if (chinaAcctDateFromInput) chinaAcctDateFromInput.addEventListener('input', renderChinaAccounting);
    if (chinaAcctDateToInput) chinaAcctDateToInput.addEventListener('input', renderChinaAccounting);
    if (chinaAcctClearBtn) {
        chinaAcctClearBtn.addEventListener('click', () => {
            if (chinaAcctDateFromInput) chinaAcctDateFromInput.value = '';
            if (chinaAcctDateToInput) chinaAcctDateToInput.value = '';
            renderChinaAccounting();
        });
    }

    const renderAccounting = () => {
        // Flatten all orders across users
        const all = Object.values(ordersStore || {}).flat().map(o => ({...o}));
        // Date range is applied to Order Date
        const fromStr = acctDateFromInput && acctDateFromInput.value ? acctDateFromInput.value : '';
        const toStr = acctDateToInput && acctDateToInput.value ? acctDateToInput.value : '';
        const fromDate = fromStr ? new Date(fromStr) : null;
        const toDate = toStr ? new Date(toStr) : null;
        if (toDate) toDate.setHours(23,59,59,999);
        const filtered = all.filter(o => {
            let ok = true;
            const d = o.date ? new Date(o.date) : null;
            if (fromDate && (!d || d < fromDate)) ok = false;
            if (toDate && (!d || d > toDate)) ok = false;
            return ok;
        });

        // Totals
        const totals = filtered.reduce((acc, o) => {
            acc.weight += Number(o.weight) || 0;
            acc.shipping += Number(o.shippingCost) || 0;
            acc.inshipping += Number(o.inShipping) || 0;
            acc.purches += Number(o.purchesProf) || 0;
            acc.moreceived += Number(o.moReceived) || 0;
            acc.profit += Number(o.totalProfit) || 0;
            return acc;
        }, { weight:0, shipping:0, inshipping:0, purches:0, moreceived:0, profit:0 });
        if (acctTotalWeight) acctTotalWeight.textContent = totals.weight.toFixed(2);
        if (acctTotalShipping) acctTotalShipping.textContent = totals.shipping.toFixed(2);
        if (acctTotalInShipping) acctTotalInShipping.textContent = totals.inshipping.toFixed(2);
        if (acctTotalPurches) acctTotalPurches.textContent = totals.purches.toFixed(2);
        if (acctTotalMoReceived) acctTotalMoReceived.textContent = totals.moreceived.toFixed(2);
        if (acctTotalProfit) acctTotalProfit.textContent = totals.profit.toFixed(2);

        // Table
        if (acctSummaryBody) {
            acctSummaryBody.innerHTML = '';
            filtered.forEach(o => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-gray-800/40';
                tr.innerHTML = `
                    <td class="table-cell">${o.trackNo || ''}</td>
                    <td class="table-cell">${o.weight || 0}</td>
                    <td class="table-cell">${o.shippingCost || 0}</td>
                    <td class="table-cell">${o.inShipping || 0}</td>
                    <td class="table-cell">${o.purchesProf || 0}</td>
                    <td class="table-cell">${o.moReceived || 0}</td>
                    <td class="table-cell">${o.totalProfit || 0}</td>
                    <td class="table-cell">${o.dateArrival || ''}</td>
                `;
                acctSummaryBody.appendChild(tr);
            });
            makeTableSortable(acctSummaryBody.closest('table'));
        }
    };

    let currentOrdersUserCode = null;
    let currentOrdersUserName = null;

    const renderOrdersTable = (userCode, filterTerm = '') => {
        const term = (filterTerm || '').toLowerCase().trim();
        const orders = (ordersStore[userCode] || []).filter(o => ((o.trackNo || '').toLowerCase().includes(term)));
        ordersTableBody.innerHTML = '';
        orders.forEach((order, idx) => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-800/50';
            row.innerHTML = `
                                        <td class="table-cell">${order.trackNo || ''}</td>
                    <td class="table-cell">${order.country || ''}</td>
                    <td class="table-cell">${order.company || ''}</td>
                    <td class="table-cell">${order.weight || ''}</td>
                <td class="table-cell">${order.pPerKg || ''}</td>
                <td class="table-cell">${order.shippingCost || ''}</td>
                <td class="table-cell">${order.inShipCost || ''}</td>
                <td class="table-cell">${order.inShipping || ''}</td>
                <td class="table-cell">${order.purchesProf || ''}</td>
                <td class="table-cell">${order.moReceived || ''}</td>
                <td class="table-cell">${order.totalProfit || ''}</td>
                <td class="table-cell">${order.dateArrival || ''}</td>
                <td class="table-cell">${order.cashBack || ''}</td>
                <td class="table-cell">${order.date || ''}</td>
                <td class="table-cell text-center space-x-2">
                    <button class="order-edit-btn" title="Edit" data-index="${idx}"><i class="fas fa-edit"></i></button>
                    <button class="order-delete-btn" title="Delete" data-index="${idx}"><i class="fas fa-trash"></i></button>
                </td>
            `;
            ordersTableBody.appendChild(row);
        });
        const ordersTableEl = ordersTableBody.closest('table');
        if (ordersTableEl) makeTableSortable(ordersTableEl);
    };

    const renderUsersTableView = (filterTerm = '') => {
        if (!usersTableBody2) return;
        const term = filterTerm.toLowerCase().trim();
        usersTableBody2.innerHTML = '';
        Object.values(usersStore)
            .sort((a,b) => a.userCode.localeCompare(b.userCode))
            .forEach(u => {
                const match = !term || u.userCode.toLowerCase().includes(term) || u.fullName.toLowerCase().includes(term);
                if (!match) return;
                const tr = document.createElement('tr');
                tr.dataset.userCode = u.userCode;
                tr.className = 'hover:bg-gray-700/50 transition-colors cursor-pointer';
                tr.innerHTML = `
                    <td class="p-3">${u.userCode}</td>
                    <td class="p-3">${u.fullName}</td>
                    <td class="p-3">${u.phoneNo1 || ''}</td>
                    <td class="p-3">${u.phoneNo2 || ''}</td>
                    <td class="p-3">${u.city || ''}</td>
                    <td class="p-3">${u.neighborhood || ''}</td>
                    <td class="p-3">${u.address || ''}</td>
                    <td class="p-3">${u.closePlace || ''}</td>
                `;
                usersTableBody2.appendChild(tr);
            });
            const usersTableEl = usersTableBody2 ? usersTableBody2.closest('table') : null;
            if (usersTableEl) makeTableSortable(usersTableEl);
    };

    const renderDetailsOrders = (code) => {
        const orders = ordersStore[code] || [];
        detailsOrdersBody.innerHTML = '';
        if (orders.length === 0) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td class="p-2 text-gray-300" colspan="5">No orders found.</td>`;
            detailsOrdersBody.appendChild(tr);
            return;
        }
        orders.forEach((o, idx) => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-700/30 transition-colors';
            tr.innerHTML = `
                <td class="p-2">${o.trackNo || 'N/A'}</td>
                <td class="p-2">${o.date || 'N/A'}</td>
                <td class="p-2">${o.totalProfit || 0}</td>
                <td class="p-2">Completed</td>
                <td class="p-2 text-center space-x-2">
                    <button class="order-edit-btn" title="Edit" data-index="${idx}"><i class="fas fa-edit"></i></button>
                    <button class="order-delete-btn" title="Delete" data-index="${idx}"><i class="fas fa-trash"></i></button>
                </td>`;
            detailsOrdersBody.appendChild(tr);
        });
    };

    let currentDetailsUserCode = null;
    const openUserDetailsModal = (code) => {
        closeAllModals();
        const u = usersStore[code];
        if (!u) return;
        detailsUserTitle.textContent = `User Details - ${u.fullName} (${u.userCode})`;
        detailsCode.textContent = u.userCode;
        detailsName.textContent = u.fullName;
        detailsPhone1.textContent = u.phoneNo1 || '';
        detailsPhone2.textContent = u.phoneNo2 || '';
        detailsCity.textContent = u.city || '';
        detailsNeighborhood.textContent = u.neighborhood || '';
        detailsAddress.textContent = u.address || '';
        detailsClosePlace.textContent = u.closePlace || '';
        renderDetailsOrders(code);
        userDetailsModal.classList.remove('invisible', 'opacity-0');
        userDetailsModal.querySelector('.modal-content').classList.remove('scale-95');
        setBodyScroll(true);
        currentDetailsUserCode = code;
    };

    const closeUserDetailsModal = () => {
        userDetailsModal.classList.add('invisible', 'opacity-0');
        userDetailsModal.querySelector('.modal-content').classList.add('scale-95');
        setBodyScroll(false);
    };

    const openOrderModal = () => {
        if (!currentOrdersUserCode) return;
        closeAllModals();
        orderForm.reset();
        orderFormMode = 'add';
        orderEditCtx = { code: null, index: null };
        orderFullNameInput.value = currentOrdersUserName || '';
        orderDateInput.value = new Date().toISOString().split('T')[0];
        orderModalTitle.textContent = 'Add New Order';
        submitOrderBtn.textContent = 'Add';
        orderModal.classList.remove('invisible', 'opacity-0');
        orderModal.querySelector('.modal-content').classList.remove('scale-95');
        setBodyScroll(true);
    };

    const closeOrderModal = () => {
        orderModal.classList.add('invisible', 'opacity-0');
        orderModal.querySelector('.modal-content').classList.add('scale-95');
        // reset mode when closing
        orderFormMode = 'add';
        orderEditCtx = { code: null, index: null };
        submitOrderBtn.textContent = 'Add';
        setBodyScroll(false);
    };

    addUserLink.addEventListener('click', (e) => {
        e.preventDefault();
        showAddUserView();
    });

    backToDashboardBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showDashboardView();
    });

    if (usersNavLink) {
        usersNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            rebuildUsersStoreFromDOM();
            showUsersView();
        });
    }
    
    if (chinaNavLink) {
        chinaNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            showChinaView();
        });
    }

    if (restOfWorldNavLink) {
        restOfWorldNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            showRestOfWorldView();
        });
    }

    if(expensesNavLink) {
        expensesNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            showExpensesView();
        });
    }
    
    if(totalExpensesNavLink) {
        totalExpensesNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            showTotalExpensesView();
        });
    }

    if(paymentReceiptsNavLink) {
        paymentReceiptsNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPaymentReceiptsView();
        });
    }

    if (usersBackBtn) {
        usersBackBtn.addEventListener('click', hideUsersViewToDashboard);
    }
    
    if (chinaBackBtn) {
        chinaBackBtn.addEventListener('click', showDashboardView);
    }
    
    if (restOfWorldBackBtn) {
        restOfWorldBackBtn.addEventListener('click', showDashboardView);
    }

    if (expensesBackBtn) {
        expensesBackBtn.addEventListener('click', showDashboardView);
    }
    
    if (totalExpensesBackBtn) {
        totalExpensesBackBtn.addEventListener('click', showDashboardView);
    }

    if (paymentReceiptsBackBtn) {
        paymentReceiptsBackBtn.addEventListener('click', showDashboardView);
    }

    if (ordersBackBtn) {
        ordersBackBtn.addEventListener('click', hideOrdersViewToUsers);
    }
    if (accountingNavLink) {
        accountingNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            showAccountingView();
        });
    }
    if (chinaNavLink) {
        chinaNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            showChinaView();
        });
    }
    if (accountingBackBtn) {
        accountingBackBtn.addEventListener('click', () => {
            accountingView.classList.add('hidden');
            accountingView.classList.remove('fullscreen');
            setBodyScroll(false);
            dashboardView.classList.remove('hidden');
        });
    }
    if (chinaBackBtn) {
        chinaBackBtn.addEventListener('click', () => {
            chinaView.classList.add('hidden');
            chinaView.classList.remove('fullscreen');
            setBodyScroll(false);
            dashboardView.classList.remove('hidden');
        });
    }
    if (acctDateFromInput) {
        acctDateFromInput.addEventListener('change', renderAccounting);
    }
    if (acctDateToInput) {
        acctDateToInput.addEventListener('change', renderAccounting);
    }
    if (acctClearBtn) {
        acctClearBtn.addEventListener('click', () => {
            if (acctDateFromInput) acctDateFromInput.value = '';
            if (acctDateToInput) acctDateToInput.value = '';
            renderAccounting();
        });
    }
    if (ordersSearchInput) {
        ordersSearchInput.addEventListener('input', () => {
            if (currentOrdersUserCode) renderOrdersTable(currentOrdersUserCode, ordersSearchInput.value);
        });
    }

    if (usersSearchInput) {
        usersSearchInput.addEventListener('input', (e) => {
            renderUsersTableView(e.target.value);
            const usersTableEl = usersTableBody2 ? usersTableBody2.closest('table') : null;
            if (usersTableEl) makeTableSortable(usersTableEl);
        });
    }
    // Orders actions on orders page
    if (ordersTableBody) {
    ordersTableBody.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const idx = parseInt(btn.dataset.index, 10);
    if (isNaN(idx)) return;
    const code = currentOrdersUserCode;
    if (!code) return;
    if (btn.classList.contains('order-delete-btn')) {
    if (confirm('Delete this order?')) {
    ordersStore[code].splice(idx, 1);
    renderOrdersTable(code, ordersSearchInput ? ordersSearchInput.value : '');
    showNotification('Order deleted.', 'error');
    }
    return;
    }
    if (btn.classList.contains('order-edit-btn')) {
    const o = ordersStore[code][idx];
    closeAllModals();
    orderForm.reset();
    orderFormMode = 'edit';
    orderEditCtx = { code, index: idx };
    orderFullNameInput.value = currentOrdersUserName || '';
    document.getElementById('track-no').value = o.trackNo || '';
    document.getElementById('country').value = o.country || '';
    document.getElementById('company').value = o.company || '';
    document.getElementById('all-cost').value = o.allCost || '';
    document.getElementById('all-weight').value = o.allWeight || '';
    document.getElementById('weight').value = o.weight || '';
    document.getElementById('p-per-kg').value = o.pPerKg || '';
    document.getElementById('shipping-cost').value = o.shippingCost || '';
    document.getElementById('in-ship-cost').value = o.inShipCost || '';
    document.getElementById('in-shipping').value = o.inShipping || '';
    document.getElementById('purches-prof').value = o.purchesProf || '';
    document.getElementById('mo-received').value = o.moReceived || '';
    document.getElementById('total-profit').value = o.totalProfit || '';
    document.getElementById('date-arrival').value = o.dateArrival || '';
    document.getElementById('cash-back').value = o.cashBack || '';
    document.getElementById('all-cash-backs').value = o.allCashBacks || '';
    document.getElementById('order-date').value = o.date || new Date().toISOString().split('T')[0];
    orderModalTitle.textContent = 'Edit Order';
    submitOrderBtn.textContent = 'Update Order';
    orderModal.classList.remove('invisible', 'opacity-0');
    orderModal.querySelector('.modal-content').classList.remove('scale-95');
    setBodyScroll(true);
    return;
    }
    });
    }

    if (usersTableBody2) {
        usersTableBody2.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (!row) return;
            const code = row.dataset.userCode;
            Array.from(usersTableBody2.querySelectorAll('tr')).forEach(tr => tr.classList.remove('ring-2', 'ring-teal-500/70', 'bg-gray-700/50'));
            row.classList.add('ring-2', 'ring-teal-500/70', 'bg-gray-700/50');
            selectedUserCodeInUsers = code;
            const cells = row.querySelectorAll('td');
            selectedUserNameInUsers = cells[1] ? cells[1].textContent.trim() : '';
            updateUsersOrdersButtonState();
        });

        usersTableBody2.addEventListener('dblclick', (e) => {
            const row = e.target.closest('tr');
            if (row) openUserDetailsModal(row.dataset.userCode);
        });
    }

    if (usersOrdersBtn) {
        usersOrdersBtn.addEventListener('click', () => {
            if (!selectedUserCodeInUsers) return;
            showOrdersView(selectedUserCodeInUsers, selectedUserNameInUsers);
        });
    }

    if (addOrderBtn) {
        addOrderBtn.addEventListener('click', openOrderModal);
    }

    if (closeOrderModalBtn) {
        closeOrderModalBtn.addEventListener('click', closeOrderModal);
    }
    if (orderCancelBtn) {
        orderCancelBtn.addEventListener('click', closeOrderModal);
    }

    if (orderModal) {
        orderModal.addEventListener('click', (e) => {
            if (e.target === orderModal) closeOrderModal();
        });
    }

    openModalBtn.addEventListener('click', () => openModal('add'));
    cancelBtn.addEventListener('click', closeModal);
    userModal.addEventListener('click', (e) => {
        if (e.target === userModal) closeModal();
    });

    if (userDetailsModal) {
        userDetailsModal.addEventListener('click', (e) => {
            if (e.target === userDetailsModal) closeUserDetailsModal();
        });
    }
    // Details orders actions (edit/delete)
    if (detailsOrdersBody) {
        detailsOrdersBody.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            const idx = parseInt(btn.dataset.index, 10);
            if (isNaN(idx)) return;
            const code = currentDetailsUserCode;
            if (!code) return;
            if (btn.classList.contains('order-delete-btn')) {
                if (confirm('Delete this order?')) {
                    ordersStore[code].splice(idx, 1);
                    renderDetailsOrders(code);
                    if (currentOrdersUserCode === code) {
                        renderOrdersTable(code, ordersSearchInput ? ordersSearchInput.value : '');
                    }
                    showNotification('Order deleted.', 'error');
                }
                return;
            }
            if (btn.classList.contains('order-edit-btn')) {
                const o = ordersStore[code][idx];
                closeAllModals();
                orderForm.reset();
                orderFormMode = 'edit';
                orderEditCtx = { code, index: idx };
                orderFullNameInput.value = (usersStore[code]?.fullName) || '';
                document.getElementById('track-no').value = o.trackNo || '';
                document.getElementById('country').value = o.country || '';
                document.getElementById('company').value = o.company || '';
                document.getElementById('all-cost').value = o.allCost || '';
                document.getElementById('all-weight').value = o.allWeight || '';
                document.getElementById('weight').value = o.weight || '';
                document.getElementById('p-per-kg').value = o.pPerKg || '';
                document.getElementById('shipping-cost').value = o.shippingCost || '';
                document.getElementById('in-ship-cost').value = o.inShipCost || '';
                document.getElementById('in-shipping').value = o.inShipping || '';
                document.getElementById('purches-prof').value = o.purchesProf || '';
                document.getElementById('mo-received').value = o.moReceived || '';
                document.getElementById('total-profit').value = o.totalProfit || '';
                document.getElementById('date-arrival').value = o.dateArrival || '';
                document.getElementById('cash-back').value = o.cashBack || '';
                document.getElementById('all-cash-backs').value = o.allCashBacks || '';
                document.getElementById('order-date').value = o.date || new Date().toISOString().split('T')[0];
                orderModalTitle.textContent = 'Edit Order';
                submitOrderBtn.textContent = 'Update Order';
                orderModal.classList.remove('invisible', 'opacity-0');
                orderModal.querySelector('.modal-content').classList.remove('scale-95');
                setBodyScroll(true);
                return;
            }
        });
    }
    if (userDetailsCloseBtn) userDetailsCloseBtn.addEventListener('click', closeUserDetailsModal);

    if (addOrderForm) {
        addOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = currentDetailsUserCode;
            if (!code) return;
            const order = {
                id: newOrderId.value.trim(),
                date: newOrderDate.value,
                amount: parseFloat(newOrderAmount.value || '0') || 0,
                status: newOrderStatus.value,
            };
            if (!order.id || !order.date || isNaN(order.amount)) {
                showNotification('Order fields are required.', 'error');
                return;
            }
            ordersStore[code] = ordersStore[code] || [];
            ordersStore[code].push(order);
            renderDetailsOrders(code);
            newOrderId.value = '';
            newOrderDate.value = '';
            newOrderAmount.value = '';
            newOrderStatus.value = 'Pending';
            showNotification('Order added.', 'success');
        });
    }

    if (orderForm && submitOrderBtn) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const isEdit = orderFormMode === 'edit' && orderEditCtx && orderEditCtx.code != null && orderEditCtx.index != null;
            const targetCode = isEdit ? orderEditCtx.code : currentOrdersUserCode;
            if (!targetCode) return;
            
            const orderData = {
                trackNo: document.getElementById('track-no').value.trim(),
                country: document.getElementById('country').value.trim(),
                company: document.getElementById('company').value.trim(),
                weight: parseFloat(document.getElementById('weight').value) || 0,
                pPerKg: parseFloat(document.getElementById('p-per-kg').value) || 0,
                shippingCost: parseFloat(document.getElementById('shipping-cost').value) || 0,
                inShipCost: parseFloat(document.getElementById('in-ship-cost').value) || 0,
                inShipping: parseFloat(document.getElementById('in-shipping').value) || 0,
                purchesProf: parseFloat(document.getElementById('purches-prof').value) || 0,
                moReceived: parseFloat(document.getElementById('mo-received').value) || 0,
                totalProfit: parseFloat(document.getElementById('total-profit').value) || 0,
                dateArrival: document.getElementById('date-arrival').value,
                cashBack: parseFloat(document.getElementById('cash-back').value) || 0,
                allCashBacks: parseFloat(document.getElementById('all-cash-backs').value) || 0,
                date: document.getElementById('order-date').value
            };

            if (!orderData.trackNo) {
                showNotification('Track number is required.', 'error');
                return;
            }

            ordersStore[targetCode] = ordersStore[targetCode] || [];
            if (isEdit) {
                ordersStore[targetCode][orderEditCtx.index] = orderData;
            } else {
                ordersStore[targetCode].push(orderData);
            }
            renderOrdersTable(targetCode, ordersSearchInput ? ordersSearchInput.value : '');
            if (currentDetailsUserCode === targetCode) {
                renderDetailsOrders(targetCode);
            }
            orderFormMode = 'add';
            orderEditCtx = { code: null, index: null };
            closeOrderModal();
            showNotification(isEdit ? 'Order updated successfully!' : 'Order added successfully!', 'success');
        });
    }

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userCode = document.getElementById('user-code').value.trim();
        const fullName = document.getElementById('full-name').value.trim();
        const editingCode = editUserCodeInput.value;

        if (!userCode || !fullName) {
            showNotification('User-Code and Full-Name are required.', 'error');
            return;
        }

        const userData = {
            userCode,
            fullName,
            phoneNo1: document.getElementById('phone-no1').value,
            phoneNo2: document.getElementById('phone-no2').value,
            city: document.getElementById('city').value,
            neighborhood: document.getElementById('neighborhood').value,
            address: document.getElementById('address').value,
            closePlace: document.getElementById('close-place').value,
        };

        if (editingCode) {
            const rowToUpdate = userTableBody.querySelector(`tr[data-user-code="${editingCode}"]`);
            if (rowToUpdate) {
                rowToUpdate.querySelector('[data-label="full-name"]').textContent = userData.fullName;
                rowToUpdate.querySelector('[data-label="phone-no1"]').textContent = userData.phoneNo1;
                rowToUpdate.querySelector('[data-label="phone-no2"]').textContent = userData.phoneNo2;
                rowToUpdate.querySelector('[data-label="city"]').textContent = userData.city;
                rowToUpdate.querySelector('[data-label="neighborhood"]').textContent = userData.neighborhood;
                rowToUpdate.querySelector('[data-label="address"]').textContent = userData.address;
                rowToUpdate.querySelector('[data-label="close-place"]').textContent = userData.closePlace;
                usersStore[editingCode] = {
                    userCode: editingCode,
                    fullName: userData.fullName,
                    phoneNo1: userData.phoneNo1,
                    phoneNo2: userData.phoneNo2,
                    city: userData.city,
                    neighborhood: userData.neighborhood,
                    address: userData.address,
                    closePlace: userData.closePlace,
                };
                if (usersView && !usersView.classList.contains('hidden')) {
                    renderUsersTableView(usersSearchInput ? usersSearchInput.value : '');
                }
                if (manageUsersSearchInput) applyManageUsersFilter();
                showNotification('User updated successfully!', 'success');
            }
        } else {
            if (userTableBody.querySelector(`tr[data-user-code="${userCode}"]`)) {
                showNotification('User-Code already exists.', 'error');
                return;
            }
            const newRow = document.createElement('tr');
            newRow.className = 'hover:bg-gray-700/50 transition-colors';
            newRow.setAttribute('data-user-code', userData.userCode);
            newRow.innerHTML = `
                <td class="p-3" data-label="user-code">${userData.userCode}</td>
                <td class="p-3" data-label="full-name">${userData.fullName}</td>
                <td class="p-3" data-label="phone-no1">${userData.phoneNo1}</td>
                <td class="p-3" data-label="phone-no2">${userData.phoneNo2}</td>
                <td class="p-3" data-label="city">${userData.city}</td>
                <td class="p-3" data-label="neighborhood">${userData.neighborhood}</td>
                <td class="p-3" data-label="address">${userData.address}</td>
                <td class="p-3" data-label="close-place">${userData.closePlace}</td>
                <td class="p-3 text-center space-x-2">
                    <button class="edit-btn p-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition-all" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            userTableBody.appendChild(newRow);
            ordersStore[userData.userCode] = ordersStore[userData.userCode] || [];
            usersStore[userData.userCode] = { ...userData };
            if (usersView && !usersView.classList.contains('hidden')) {
                renderUsersTableView(usersSearchInput ? usersSearchInput.value : '');
            }
            if (manageUsersSearchInput) applyManageUsersFilter();
            showNotification('User added successfully!', 'success');
        }
        closeModal();
    });

    userTableBody.addEventListener('click', (e) => {
        const targetButton = e.target.closest('button');
        const row = e.target.closest('tr');
        if (!row || !targetButton) return;
        
        if (targetButton && row) {
            const userCode = row.dataset.userCode;

                            if (targetButton.classList.contains('delete-btn')) {
                if (confirm(`Are you sure you want to delete user ${userCode}?`)) {
                    row.remove();
                    delete usersStore[userCode];
                    delete ordersStore[userCode];
                    if (usersView && !usersView.classList.contains('hidden')) {
                        renderUsersTableView(usersSearchInput ? usersSearchInput.value : '');
                    }
                    if (manageUsersSearchInput) applyManageUsersFilter();
                    showNotification(`User ${userCode} deleted.`, 'error');
                }
            }

            if (targetButton.classList.contains('edit-btn')) {
                const data = {
                    userCode: row.querySelector('[data-label="user-code"]').textContent,
                    fullName: row.querySelector('[data-label="full-name"]').textContent,
                    phoneNo1: row.querySelector('[data-label="phone-no1"]').textContent,
                    phoneNo2: row.querySelector('[data-label="phone-no2"]').textContent,
                    city: row.querySelector('[data-label="city"]').textContent,
                    neighborhood: row.querySelector('[data-label="neighborhood"]').textContent,
                    address: row.querySelector('[data-label="address"]').textContent,
                    closePlace: row.querySelector('[data-label="close-place"]').textContent,
                };
                openModal('edit', data);
            }
        } else if (row && !targetButton) {
            openUserDetailsModal(row.dataset.userCode);
        }
    });
    
    // Expenses Logic
    const openExpenseModal = (expense = null) => {
        addExpenseForm.reset();
        if (expense) {
            expenseModalTitle.textContent = 'Edit Expense';
            submitExpenseBtn.textContent = 'Update Expense';
            editExpenseIdInput.value = expense.id;
            document.getElementById('expense-date').value = expense.date;
            document.getElementById('expense-rent').value = expense.rent;
            document.getElementById('expense-electricity').value = expense.electricity;
            document.getElementById('expense-device').value = expense.device;
            document.getElementById('expense-qrtasia').value = expense.qrtasia;
            document.getElementById('expense-others').value = expense.others;
        } else {
            expenseModalTitle.textContent = 'Add New Expense';
            submitExpenseBtn.textContent = 'Add Expense';
            editExpenseIdInput.value = '';
            document.getElementById('expense-date').value = new Date().toISOString().split('T')[0];
        }
        expenseModal.classList.remove('invisible', 'opacity-0');
        expenseModal.querySelector('.modal-content').classList.remove('scale-95');
        setBodyScroll(true);
    };

    const closeExpenseModal = () => {
        expenseModal.classList.add('invisible', 'opacity-0');
        expenseModal.querySelector('.modal-content').classList.add('scale-95');
        ensureBodyScroll();
    };

    if (openExpenseModalBtn) openExpenseModalBtn.addEventListener('click', () => openExpenseModal());
    if (cancelExpenseBtn) cancelExpenseBtn.addEventListener('click', closeExpenseModal);

    if (addExpenseForm) {
        addExpenseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = document.getElementById('expense-date').value;
            const rent = parseFloat(document.getElementById('expense-rent').value) || 0;
            const electricity = parseFloat(document.getElementById('expense-electricity').value) || 0;
            const device = parseFloat(document.getElementById('expense-device').value) || 0;
            const qrtasia = parseFloat(document.getElementById('expense-qrtasia').value) || 0;
            const others = parseFloat(document.getElementById('expense-others').value) || 0;
            const total = rent + electricity + device + qrtasia + others;
            
            if (!date) {
                showNotification('Please select a date for the expense.', 'warning');
                return;
            }

            const editingId = editExpenseIdInput.value;

            if (editingId) {
                const expenseIndex = expensesStore.findIndex(exp => exp.id == editingId);
                if (expenseIndex > -1) {
                    expensesStore[expenseIndex] = { ...expensesStore[expenseIndex], date, rent, electricity, device, qrtasia, others, total };
                    showNotification('Expense updated successfully!', 'success');
                }
            } else {
                const newExpense = {
                    id: Date.now(), // Simple unique ID
                    date,
                    rent,
                    electricity,
                    device,
                    qrtasia,
                    others,
                    total
                };
                expensesStore.push(newExpense);
                showNotification('Expense added successfully!', 'success');
            }

            renderExpensesTable();
            closeExpenseModal();
        });
    }

    if (expensesTableBody) {
        expensesTableBody.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;

            const index = parseInt(button.dataset.index);
            if (isNaN(index)) return;

            if (button.classList.contains('expense-edit-btn')) {
                openExpenseModal(expensesStore[index]);
            } else if (button.classList.contains('expense-delete-btn')) {
                if (confirm('Are you sure you want to delete this expense record?')) {
                    expensesStore.splice(index, 1);
                    renderExpensesTable();
                    showNotification('Expense deleted.', 'error');
                }
            }
        });
    }
    
    if (runExpenseAccountingBtn) {
        runExpenseAccountingBtn.addEventListener('click', () => {
            const fromStr = expenseDateFrom.value;
            const toStr = expenseDateTo.value;

            if (!fromStr || !toStr) {
                showNotification('Please select both a "From" and "To" date.', 'warning');
                return;
            }

            const fromDate = new Date(fromStr);
            const toDate = new Date(toStr);
            toDate.setHours(23, 59, 59, 999);

            const filteredExpenses = expensesStore.filter(expense => {
                const expenseDate = new Date(expense.date);
                return expenseDate >= fromDate && expenseDate <= toDate;
            });

            const totals = filteredExpenses.reduce((acc, exp) => {
                acc.rent += exp.rent;
                acc.electricity += exp.electricity;
                acc.device += exp.device;
                acc.qrtasia += exp.qrtasia;
                acc.others += exp.others;
                acc.grandTotal += exp.total;
                return acc;
            }, { rent: 0, electricity: 0, device: 0, qrtasia: 0, others: 0, grandTotal: 0 });

            document.getElementById('acct-total-rent').textContent = totals.rent.toFixed(2);
            document.getElementById('acct-total-electricity').textContent = totals.electricity.toFixed(2);
            document.getElementById('acct-total-device').textContent = totals.device.toFixed(2);
            document.getElementById('acct-total-qrtasia').textContent = totals.qrtasia.toFixed(2);
            document.getElementById('acct-total-others').textContent = totals.others.toFixed(2);
            document.getElementById('acct-grand-total').textContent = totals.grandTotal.toFixed(2);

            expenseAccountingTableBody.innerHTML = '';
            filteredExpenses.forEach(expense => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="table-cell">${expense.rent.toFixed(2)}</td>
                    <td class="table-cell">${expense.electricity.toFixed(2)}</td>
                    <td class="table-cell">${expense.device.toFixed(2)}</td>
                    <td class="table-cell">${expense.qrtasia.toFixed(2)}</td>
                    <td class="table-cell">${expense.others.toFixed(2)}</td>
                    <td class="table-cell font-semibold">${expense.total.toFixed(2)}</td>
                    <td class="table-cell">${expense.date}</td>
                `;
                expenseAccountingTableBody.appendChild(tr);
            });
            
            makeTableSortable(expenseAccountingTableBody.closest('table'));
            expenseAccountingResults.classList.remove('hidden');
            showNotification(`Displaying expense accounting from ${fromStr} to ${toStr}.`, 'info');
        });
    }

    if(closeAccountingSummaryBtn) {
        closeAccountingSummaryBtn.addEventListener('click', () => {
            expenseAccountingResults.classList.add('hidden');
        });
    }

    // Event Listeners for Total Summary View
    if (totalSummaryDateFrom) totalSummaryDateFrom.addEventListener('change', renderTotalSummary);
    if (totalSummaryDateTo) totalSummaryDateTo.addEventListener('change', renderTotalSummary);
    if (totalSummaryClearFilters) {
        totalSummaryClearFilters.addEventListener('click', () => {
            totalSummaryDateFrom.value = '';
            totalSummaryDateTo.value = '';
            renderTotalSummary();
        });
    }

    // Payment Receipts Logic (NEW)
    const openPaymentReceiptModal = (receipt = null) => {
        paymentReceiptForm.reset();
        if (receipt) {
            paymentReceiptModalTitle.textContent = 'Edit Receipt';
            submitPaymentReceiptBtn.textContent = 'Update Receipt';
            editReceiptIdInput.value = receipt.id;
            document.getElementById('receipt-name').value = receipt.name;
            document.getElementById('receipt-phone-no').value = receipt.phoneNo;
            document.getElementById('receipt-iqd').value = receipt.iqd;
            document.getElementById('receipt-usd').value = receipt.usd;
            document.getElementById('receipt-type-of-work').value = receipt.typeOfWork;
            document.getElementById('receipt-note').value = receipt.note;
            document.getElementById('receipt-total').value = receipt.total;
            document.getElementById('receipt-date').value = receipt.date;
        } else {
            paymentReceiptModalTitle.textContent = 'Add New Receipt';
            submitPaymentReceiptBtn.textContent = 'Add Receipt';
            editReceiptIdInput.value = '';
            document.getElementById('receipt-date').value = new Date().toISOString().split('T')[0];
        }
        paymentReceiptModal.classList.remove('invisible', 'opacity-0');
        paymentReceiptModal.querySelector('.modal-content').classList.remove('scale-95');
        setBodyScroll(true);
    };

    const closePaymentReceiptModal = () => {
        paymentReceiptModal.classList.add('invisible', 'opacity-0');
        paymentReceiptModal.querySelector('.modal-content').classList.add('scale-95');
        ensureBodyScroll();
    };

    if (openPaymentReceiptModalBtn) openPaymentReceiptModalBtn.addEventListener('click', () => openPaymentReceiptModal());
    if (cancelPaymentReceiptBtn) cancelPaymentReceiptBtn.addEventListener('click', closePaymentReceiptModal);
    
    if (printReceiptsBtn) {
        printReceiptsBtn.addEventListener('click', () => {
            if (!selectedReceiptForPrint) {
                showNotification('Please select a receipt from the table to print.', 'warning');
                return;
            }

            // Populate the print area with data from the selected receipt
            document.getElementById('print-name').textContent = selectedReceiptForPrint.name || '';
            document.getElementById('print-phone').textContent = selectedReceiptForPrint.phoneNo || '';
            document.getElementById('print-date').textContent = selectedReceiptForPrint.date || '';
            document.getElementById('print-iqd').textContent = selectedReceiptForPrint.iqd ? selectedReceiptForPrint.iqd.toFixed(2) : '0.00';
            document.getElementById('print-usd').textContent = selectedReceiptForPrint.usd ? selectedReceiptForPrint.usd.toFixed(2) : '0.00';
            document.getElementById('print-work-type').textContent = selectedReceiptForPrint.typeOfWork || '';
            document.getElementById('print-note').textContent = selectedReceiptForPrint.note || '';
            document.getElementById('print-total').textContent = selectedReceiptForPrint.total ? selectedReceiptForPrint.total.toFixed(2) : '0.00';

            // Trigger the browser's print dialog
            window.print();
        });
    }

    if (paymentReceiptForm) {
        paymentReceiptForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('receipt-name').value.trim();
            const phoneNo = document.getElementById('receipt-phone-no').value.trim();
            const iqd = parseFloat(document.getElementById('receipt-iqd').value) || 0;
            const usd = parseFloat(document.getElementById('receipt-usd').value) || 0;
            const typeOfWork = document.getElementById('receipt-type-of-work').value.trim();
            const note = document.getElementById('receipt-note').value.trim();
            const date = document.getElementById('receipt-date').value;
            const total = parseFloat(document.getElementById('receipt-total').value) || 0;
            
            if (!name || !date) {
                showNotification('Name and date are required for the receipt.', 'warning');
                return;
            }

            const editingId = editReceiptIdInput.value;

            if (editingId) {
                const receiptIndex = paymentReceiptsStore.findIndex(rec => rec.id == editingId);
                if (receiptIndex > -1) {
                    paymentReceiptsStore[receiptIndex] = { ...paymentReceiptsStore[receiptIndex], name, phoneNo, iqd, usd, typeOfWork, note, date, total };
                    showNotification('Receipt updated successfully!', 'success');
                }
            } else {
                const newReceipt = {
                    id: Date.now(),
                    name,
                    phoneNo,
                    iqd,
                    usd,
                    typeOfWork,
                    note,
                    date,
                    total
                };
                paymentReceiptsStore.push(newReceipt);
                showNotification('Receipt added successfully!', 'success');
            }

            renderPaymentReceiptsTable();
            closePaymentReceiptModal();
        });
    }

    if (paymentReceiptsTableBody) {
        paymentReceiptsTableBody.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            const row = e.target.closest('tr');
            if (!row) return;

            // If a button inside the row was clicked, handle its action
            if (button) {
                const index = parseInt(button.dataset.index);
                if (isNaN(index)) return;

                if (button.classList.contains('receipt-edit-btn')) {
                    openPaymentReceiptModal(paymentReceiptsStore[index]);
                } else if (button.classList.contains('receipt-delete-btn')) {
                    if (confirm('Are you sure you want to delete this receipt?')) {
                        paymentReceiptsStore.splice(index, 1);
                        renderPaymentReceiptsTable(); // This will re-render and clear selection
                        showNotification('Receipt deleted.', 'error');
                    }
                }
            } else {
                // If the row itself was clicked (not a button), handle selection
                const allRows = paymentReceiptsTableBody.querySelectorAll('tr');
                allRows.forEach(r => r.classList.remove('selected-row'));
                row.classList.add('selected-row');

                const index = parseInt(row.dataset.index);
                if (!isNaN(index) && paymentReceiptsStore[index]) {
                    selectedReceiptForPrint = paymentReceiptsStore[index];
                } else {
                    selectedReceiptForPrint = null;
                }
            }
        });
    }


    // Initial render on page load
    renderRotwTable();
    renderExpensesTable();
    renderPaymentReceiptsTable();
});
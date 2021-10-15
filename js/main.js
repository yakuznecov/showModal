$(function () {

	function showStartModal() {
		if (localStorage.getItem('btnYes') != 1) {
			setTimeout(function () {
				$('#exampleModal').modal('show');
				$('#btn-yes').on('click', function () {
					localStorage.setItem('btnYes', 1);
					$('#exampleModal').modal('hide');
				});
			}, 3000);
		}


	}

	showStartModal();
});

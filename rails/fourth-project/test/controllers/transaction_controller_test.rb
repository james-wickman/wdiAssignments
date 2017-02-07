require 'test_helper'

class TransactionControllerTest < ActionDispatch::IntegrationTest
  test "should get user_id" do
    get transaction_user_id_url
    assert_response :success
  end

  test "should get amount:int" do
    get transaction_amount:int_url
    assert_response :success
  end

end
